import { connection, DataTypes } from "../db";
const Alergens = connection.define(
  "Alergens",
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
//Alergens.sync();
export default Alergens;