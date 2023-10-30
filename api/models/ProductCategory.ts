import { connection, DataTypes } from "../db";

const ProductCategory = connection.define(
  "ProductCategory",
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
    biz: {
      type: DataTypes.BOOLEAN,
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
//ProductCategory.sync();

export default ProductCategory;