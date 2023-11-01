import { request, response, Router } from "express";
import Customer from "../../../models/Customer";
import bcrypt from "bcryptjs";
const router = Router();

router.post("/register", async (req, res) => {
  // Our register logic starts here
    // Get Customer input
    const { username,email, password } = req.body;

    // Validate customer input
    if (!(username && email && password )) {
      res.status(400).send("All input is required(username,email, password )");
    }

    // check if Customer already exist
    // Validate if Customer exist in our database
    const oldCustomer = await Customer.findOne({
      where: { email: req.body.email },
    });

    if (oldCustomer) {
      return res.status(409).send("Customer Already Exist. Please Login");
    }

    //Encrypt Customer password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create Customer in our database
    const customer = (await Customer.create({
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    })) as any;
    console.log(customer);
  
    // return new customer
    res.json(customer);
 
});




router.post("/login", async (req, res) => {
  try{
  const {email, password } = req.body;

// Validate customer input
      if (!( email && password)) {
         res.status(400).send("All input is required(email && password)");
       }
       const customer = await Customer.findOne({
       where: { email:email }});
              
       res.status(200).json({result: customer,message :'Sve je ok!'});
  }catch(error) {
    console.log(error);
  }
});



export default router;