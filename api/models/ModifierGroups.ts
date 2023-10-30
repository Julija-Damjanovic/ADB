import { connection, DataTypes } from "../db";
const ModifierGroups = connection.define(
  "ModifierGroups",
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
    min: {
      type: DataTypes.INTEGER,
    },
    max: {
      type: DataTypes.INTEGER,
    },

 
  },
  {
    // Other model options go here
  }
);
//ModifierGroups.sync();
export default ModifierGroups;