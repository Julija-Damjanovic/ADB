import { connection, DataTypes } from "../db";
const Attribute = connection.define(
  "Attribute",
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
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    }, 
  },
  {
    // Other model options go here
  }
);
//Attribute.sync();
export default Attribute;