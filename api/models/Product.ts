import { connection, DataTypes } from "../db";
import Alergens from "./Alergens";
const Product = connection.define(
  "Product",
  {
    // Model attributes are defined here
    is_active: {
      type: DataTypes.BOOLEAN,
      //
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    same_day: {
      type: DataTypes.BOOLEAN,
      //
    },
    price: {
      type: DataTypes.FLOAT,
      //? allowNull:false,
    },
    


   // alergens type:array ? 
   // alergens: {
     // type:DataTypes.ARRAY(DataTypes.INTEGER),   
    //},
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

  },
  {
    // Other model options go here
  }
);
//Product.sync();
export default Product;
