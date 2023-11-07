import { request, response, Router } from "express";
import Customer from "../../../models/Customer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {TOKEN_KEY,regex} from "../../../secret_key";
import auth from "../../../auth"

const router = Router();




router.post("/register", async (req, res) => {
  // Our register logic starts here
    // Get Customer input
    const { username,email, password } = req.body;

    // Validate customer input
    if (!(username && email && password )) {
     return  res.status(400).send("All input is required(username,email, password )");
    }

    //validation email
    if(!regex.test(email)){
      return res.status(400).send("Email is not valid");
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
  
      // Create token
      const token = jwt.sign(
        { auth_id: customer.id, email, type: "customer" },
        TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
  
      const result = { ...customer, ...{ token: token } };
      // return new customer
      res.json(result);
 
});




router.post("/login", async (req, res) => {
  try{
  const {email, password } = req.body;

// Validate customer input
      if (!( email && password)) {
      return   res.status(400).send("All input is required(email && password)");
       }
      // Validate if customer exist in our database
    const customer = (await Customer.findOne({
      where: { email: req.body.email },
    })) as any;

    //Check password and create token
    if (customer && (await bcrypt.compare(password, customer.password))) {
      
      const token = jwt.sign(
        { auth_id: customer.id, email, type: "customer" },
        TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      const result = { token: token };
      // customer
    return res.json(result);
    }
   return res.status(400).send("Invalid Credentials");
  }catch(error) {
    console.log(error);
  }
});

router.post("/welcome", auth,async (req: request, res: response) => {
  res.status(200).send("Welcome 🙌 ");
});


export default router;