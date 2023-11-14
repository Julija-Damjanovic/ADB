import Product from "./Product";
import ProductCategory from "./ProductCategory";
import Attribute from "./Attributes";
import Maker from "./Maker";
import User from "./User";
import { connection } from "../db";
import Alergens from "./Alergens";
import ModifierGroups from "./ModifierGroups";
import Modifiers from "./Modifiers";
import Cuisines from "./Cuisines";
import DeliveryDays from "./DeliveryDays";
import MakerCategory from "./MakerCategory";
import CustomerStamp from "./CustomerStamp";
import Reward from "./Reward";
import Customer from "./Customer";
import Order from "./Order";
import Discount from "./Discount";
import OrdersProducts from "./OrdersProducts";


async function setModelRelations() {
  try {

/*ProductCategory.id < Product.category_id*/
    ProductCategory.hasMany(Product);
    Product.belongsTo(ProductCategory);
//??? ProductsCategory.id < ProductsCategory ???
       

  // ????
  /*Products.id < Attributes.product_id*/
  Product.hasOne(Attribute);  
  Attribute.belongsTo(Product);

/*Makers.id < ProductCategory.maker_id */
  Maker.hasMany(ProductCategory);
  ProductCategory.belongsTo(Maker);
  
  Product.hasMany(ModifierGroups);
  ModifierGroups.belongsTo(Product);


  var makers_users = connection.define('makers_users', {}, {
    // If don't want updatedAt
    updatedAt: false,
  });

  /*makers_users*/
  User.belongsToMany(Maker,{through: 'makers_users'});
  Maker.belongsToMany(User,{through: 'makers_users'});

  



  var alergens_products = connection.define('alergens_products', {}, {
    // If don't want updatedAt
    updatedAt: false,
  });

  /*alergens_products*/
  Product.belongsToMany(Alergens,{through: 'alergens_products'});
  Alergens.belongsToMany(Product,{through: 'alergens_products'});
  
  

/*modifiers_modifiersGroups*/
  var modifiers_modifiersGroups = connection.define('modifiers_modifiersGroups', {}, {
    // If don't want updatedAt
    updatedAt: false,
  });

  ModifierGroups.belongsToMany(Modifiers,{through: 'modifiers_modifiersGroups'});
  Modifiers.belongsToMany(ModifierGroups,{through: 'modifiers_modifiersGroups'});
  


/*Products.id < ModifierGroups.product_id*/
Product.hasMany(ModifierGroups);
ModifierGroups.belongsTo(Product);


/*cuisine makers*/
var cusine_makers = connection.define('cusine_makers', {}, {
  // If don't want updatedAt
  updatedAt: false,
});


Cuisines.belongsToMany(Maker,{through: 'cusine_makers'});
Maker.belongsToMany(Cuisines,{through: 'cusine_makers'});



/*Maker.id < DeliveryDays.maker_id*/
Maker.hasMany(DeliveryDays);  
DeliveryDays.belongsTo(Maker);

  Maker.sync();
  DeliveryDays.sync();
/*MakersCategory.id < Makers.category_id*/
  MakerCategory.hasMany(Maker); 
  Maker.belongsTo(MakerCategory);


/*CustomersStamps*/  
/*Customers.id < CustomerStamps.customer_id*/
Customer.hasMany(CustomerStamp);
CustomerStamp.belongsTo(Customer);

/*Rewards.id < CustomersStamps.reward_id*/
Reward.hasMany(CustomerStamp);
CustomerStamp.belongsTo(Reward);


  /**discount_products */

  var discount_products = connection.define('discount_products', {}, {
    // If don't want updatedAt
    updatedAt: false,
  });
  
  
 Product.belongsToMany(Discount,{through: 'discount_products'});
  Discount.belongsToMany(Product,{through: 'discount_products'});
  
  

/*orders_products*/
Order.belongsToMany(Product,{through: OrdersProducts});
Product.belongsToMany(Order,{through: OrdersProducts});


/*Makers.id< Discount.maker_id*/
Maker.hasMany(Discount);
Discount.belongsTo(Maker);



/*Makers.id < Rewards.maker_id*/
Maker.hasMany(Reward);
Reward.belongsTo(Maker);




/*Discount.id < Reward.maker_id*/
Discount.hasMany(Reward);
Reward.belongsTo(Discount);


/*Customers.id < Orders.customer_id*/
Customer.hasMany(Order);
Order.belongsTo(Customer);


/*Discount.id < Orders.discount_id*/
Discount.hasMany(Order);
Order.belongsTo(Discount);


/*Makers.id < Orders.maker_od*/
Maker.hasMany(Order);
Order.belongsTo(Maker);


console.log("✅ Model realtions set.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
}

export default setModelRelations;