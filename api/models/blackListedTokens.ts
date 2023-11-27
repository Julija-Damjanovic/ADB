import { blacklistedTokens } from "auth";
import { connection, DataTypes } from "../db";

const BlacklistedToken = connection.define('BlacklistedTokens', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

export default BlacklistedToken;