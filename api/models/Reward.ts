import { connection, DataTypes } from "../db";
const Reward = connection.define(
  "Reward",
  {
    // Model attributes are defined here
   
    is_active: {
      type: DataTypes.BOOLEAN,
      // ? 
    },
    stamp_ammount_needed: {
      type: DataTypes.INTEGER,
    },
    max_use_ammount: {
        type: DataTypes.INTEGER,
    },
    expires: {
        type: DataTypes.DATE,
    }
  },
  {
    // Other model options go here
  }
);
Reward.sync();
export default Reward;