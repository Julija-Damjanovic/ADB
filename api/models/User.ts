import {connection, DataTypes} from "../db";

const User = connection.define(
  "User",
  {
    // Model attributes are defined here
     is_active: {
      type: DataTypes.BOOLEAN,
      // ? 
     },
   
    username: {
      type: DataTypes.STRING,
      allowNull: false,
     // unique: true
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

      role: {
        type:   DataTypes.ENUM('SuperAdmin','Admin','Maker'),
   
      },
      password: {
        type: DataTypes.STRING(64),
       /* validate: {
          is: /^[0-9a-f]{64}$/i
        },*/
    },


  },
  {
    // Other model options go here
  }
);
//User.sync();

export default User;