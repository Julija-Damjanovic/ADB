import { connection, DataTypes } from "../db";
const Order = connection.define(
  "Order",
  {
    // Model attributes are defined here
   
    total: {
      type: DataTypes.FLOAT,
        
    },
    status:{
    type: DataTypes.ENUM('created','seen','accepted','prepared','pickedup','delivered'),
    },
    delivery_date_time: {
        type: DataTypes.DATE,
    }, 
    payed: {
        type: DataTypes.ENUM('notPayed','payed','rejected','refunded'),
    },
    tracking_link: {
        type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);
//Order.sync();
export default Order;