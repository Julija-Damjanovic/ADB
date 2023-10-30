import { connection, DataTypes } from "../db";
const Modifiers = connection.define(
  "Modifiers",
  {
    // Model attributes are defined here
   
    is_active: {
      type: DataTypes.BOOLEAN,
      // ? 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.FLOAT,  
    },
 
  },
  {
    // Other model options go here
  }
);
//Modifiers.sync();
export default Modifiers;