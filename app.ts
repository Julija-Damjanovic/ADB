import Routes from "./api";
import express, { Express, request, response } from "express";
import { connection, connectDB } from "./api/db";
import bodyParser from "body-parser";
import setModelRelations from "./api/models/relations"
import cors from "cors";
import cleanup from "./api/handlers/cleanup"
import cron from "node-cron";
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

cron.schedule("* 1 1 * *", cleanup);

app.listen(8000, async () => {
  console.log("🚀Server started Successfully");
  await connectDB();
 await setModelRelations();
 // connection.sync({ force: false }).
  connection.sync({ force: false}).then(() => {
    console.log("✅Synced database successfully...");
  });
});
