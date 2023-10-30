import Routes from "./api";
import express, { Express, request, response } from "express";
import { connection, connectDB } from "./api/db";
import bodyParser from "body-parser";
import setModelRelations from "./api/models/relations"
const app: Express = express();


app.get("/", (req: request, res: response) => {
  res.json({
    message: "Welcome to AND DINE BACKEND",
  });
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api/", Routes);


app.listen(8000, async () => {
  console.log("🚀Server started Successfully");
  await connectDB();
 await setModelRelations();
 // connection.sync({ force: false }).
  connection.sync({ }).then(() => {
    console.log("✅Synced database successfully...");
  });
});
