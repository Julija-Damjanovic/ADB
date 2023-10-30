import { connection, DataTypes } from "../db";
const CustomerStamp = connection.define(
  "CustomerStamp",
  {
    // Model attributes are defined here
   
    ammount: {
      type: DataTypes.FLOAT,
    
    },
    
  },
  {
    // Other model options go here
  }
);
CustomerStamp.sync();
export default CustomerStamp;