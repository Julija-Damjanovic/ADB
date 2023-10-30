import { FLOAT } from "sequelize";
import {connection, DataTypes} from "../db";

const Maker = connection.define(
  "Maker",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme:{
      type:DataTypes.ENUM('pink','purple','lightPink','orange','yellow'),
    },
    free_delivery_min_ammount: {
      type: DataTypes.FLOAT,
      //
    },
    VAT_level: {
      type: DataTypes.ENUM('20','12.5','5'),
      //
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      // 
    },
    description: {
      type: DataTypes.STRING,
      //   
    },
    comission: {
      type: DataTypes.FLOAT,
      //?
    },


  },
  {
    // Other model options go here
  }
);
//Maker.sync();

export default Maker;