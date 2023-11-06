import {connection, DataTypes} from "../db";

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

      password: {
        type: DataTypes.STRING(64),
      },
  },
  {
    // Other model options go here
  }
);
//Customer.sync();

export default Customer;