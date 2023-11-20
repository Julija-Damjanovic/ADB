import jwt from "jsonwebtoken";

import { TOKEN_KEY } from "../api/secret_key"


 let refreshTokens=[];

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


export const refreshToken = (req, res) => {
  const oldToken = req.body.refreshToken;
  if (!oldToken) {
    return res.status(403).send("A token is required for authentication");
  }

  if(!refreshTokens.includes(oldToken)){
    return res.status(403).send("please login or sign up ");
  }

  try {
    const user = jwt.verify(oldToken, TOKEN_KEY);
    const { token, refreshToken } = createToken({ user_id: user.user_id, email: user.email });
    refreshTokens = refreshTokens.filter(oldToken => token !== oldToken);
    refreshTokens.push(refreshToken);
    res.json(token);
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
};

export const createToken = (user) => {
  const token = jwt.sign(user, TOKEN_KEY, { expiresIn: "30m" });
  const refreshToken = jwt.sign(user, TOKEN_KEY, { expiresIn: "24h" });
  return { token, refreshToken }
}


export {refreshTokens};
export default verifyToken;