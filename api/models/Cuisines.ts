import { connection, DataTypes } from "../db";
const Cuisines = connection.define(
  "Cuisines",
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
 
  },
  {
    // Other model options go here
  }
);
//Cuisines.sync();
export default Cuisines;