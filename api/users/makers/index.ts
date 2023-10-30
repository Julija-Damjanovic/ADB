import { request, response, Router } from "express";
import Maker from "../../models/Maker";



const router = Router();

router.get("/", async(req: request, res: response) => {
   const data = await Maker.findAll();
     
   res.json({
    message: "Welcome to API USERS MAKERS ALL",
    result : data,
  });
});

router.get("/:id", async(req: request, res: response) => {
  const data = await Maker.findOne({
where: { id:req.params.id},
//include:Maker,
  });
  
  res.json({
    message: "Welcome to API USERS MAKERS ID:" + req.params.id,
    result: data, 
  });
});

router.post("/", async(req: request, res: response) => {
  console.log(req.body);
  const data = await Maker.create(req.body);
  res.json({
  result: data,   
  });
});

router.put("/:id", async(req: request, res: response) => {
  const data = await Maker.update(req.body, {
   where: { id:req.params.id, },
  });

  res.json({
    message: "Welcome to PUT API USERS MAKERS ID:" + req.params.id,
     result: data,
  });
});

router.delete("/:id", async(req: request, res: response) => {
  const data = await Maker.destroy({
    where: {
       id: req.params.id,
    },
  });
  
  res.json({
    message: "Welcome to DELETE API USERS MAKERS ID:" + req.params.id,
    result: data,
  });
});

export default router;
