import { DatabaseError } from "sequelize";
import { connection, DataTypes } from "../db";
const DeliveryDays = connection.define(
  "DeliveryDays",
  {
    // Model attributes are defined here
   
    is_active: {
      type: DataTypes.BOOLEAN,
      // ? 
    },
    name: {
      type: DataTypes.ENUM('Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'),
      
    },
    type_half: {
        type:DataTypes.BOOLEAN,
    },
  },
  {
    // Other model options go here
  }
);
//DeliveryDays.sync();
export default DeliveryDays;