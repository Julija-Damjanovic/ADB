import jwt from "jsonwebtoken";

import { TOKEN_KEY } from "../api/secret_key";
import BlacklistedToken from "../api/models/blackListedTokens";

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.authEntety = decoded;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    }
    else {
      return res.status(401).send("Invalid Token");
    }
  }
  return next();
};

export const refreshToken = async (req, res) => {
  const refresh = req.body.refreshToken;
  if (!refresh) {
    return res.status(403).send("A token is required for authentication");
  }
  try {

    const oldToken = await BlacklistedToken.findOne({
      where: { token: refresh }
    });
    if (oldToken) return res.status(403).send('Forbidden');
    const user = jwt.verify(refresh, TOKEN_KEY);
    const { token, refreshToken } = createToken({ user_id: user.user_id, email: user.email });
    res.json({ token });
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
}

export const createToken = (user) => {
  const token = jwt.sign(user, TOKEN_KEY, { expiresIn: "30m" });
  const refreshToken = jwt.sign(user, TOKEN_KEY, { expiresIn: "24h" });
  return { token, refreshToken }
}

export const blacklistedTokens = async (req, res) => {
  const tokenToBlacklist =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!tokenToBlacklist) {
    return res.status(403).send("A token is required for logout");
  }

  try {
    // Check if the token is already blacklisted
    const existingToken = await BlacklistedToken.findOne({
      where: { token: tokenToBlacklist }
    });
    if (existingToken) return res.status(401).send('Not an authorized user');

    // Add the token to the blacklist MySQL
    await BlacklistedToken.create({ token: tokenToBlacklist });
    res.status(200).send('Logged out successfully');
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Error blacklisting token');
  }
  // Add the token to the blacklis
}

export default verifyToken;