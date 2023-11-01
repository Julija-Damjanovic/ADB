import { request, response, Router } from "express";
import Customer from "../../../models/Customer";

const router = Router();

router.post("/login", async (req, res) => {
  try{
  const { email, password } = req.body;

// Validate customer input
      if (!(email && password)) {
         res.status(400).send("All input is required");
       }
       const customer = await Customer.findOne({
       where: { email:email }});
              
       res.status(200).json({result: customer,message :'Sve je ok!'});
  }catch(error) {
    console.log(error);
  }
});



export default router;