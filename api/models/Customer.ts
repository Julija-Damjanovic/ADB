import { connection, DataTypes } from "../db";

const Customer = connection.define(
  "Customer",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    is_active: {
      type: DataTypes.BOOLEAN,
      //
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },

    password: {
      type: DataTypes.STRING(64),
    },
  },
  
  {
    // Other model options go here
    //soft-delete (deletedAt)
    //paranoid:true,
  }
);
//Customer.sync();

export default Customer;