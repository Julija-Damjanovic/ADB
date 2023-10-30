import { connection, DataTypes } from "../db";
const Discount = connection.define(
  "Discount",
  {
    // Model attributes are defined here
   
    is_active: {
      type: DataTypes.BOOLEAN,
      // ? 
    },
  
    max_use_ammount: {
        type: DataTypes.INTEGER,
    },
    discount_type: {
        type: DataTypes.ENUM('percent','regular'),
    },
    discount_usage: {
        type: DataTypes.ENUM('auto','regular'),
    },
    ammount: {
        type: DataTypes.FLOAT,
    }, 
    expires: {
        type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
  }
);
//Discount.sync();
export default Discount;