import { connection, DataTypes } from "../db";
const OrdersProducts = connection.define(
  "OrdersProducts",
  {
    // Model attributes are defined here
   //array???
    modifiers: {
    type:DataTypes.INTEGER,
    },
    ammount: {
        type: DataTypes.INTEGER,
    },
   
   
  },
  {

  }
);
//OrdersProducts.sync();
export default OrdersProducts;