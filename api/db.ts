import { Sequelize, DataTypes } from "sequelize";
import { dbConfig } from "../sqlConfig";



const connection = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "mysql",
  }
);

async function connectDB() {
  try {
    await connection.authenticate();
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
export { connectDB, connection, Sequelize, DataTypes };