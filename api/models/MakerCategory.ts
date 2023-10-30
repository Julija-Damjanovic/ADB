import { connection, DataTypes } from "../db";

const MakerCategory = connection.define(
  "MakerCategory",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      //
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
//MakerCategory.sync();

export default MakerCategory;