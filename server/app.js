import express from "express";
import { PORT } from "./config/env.js";
import teamMemberRouter from "./routes/teamMemberRouter.js";
import ConnectToDatabase from "./database/mongodb.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/team", teamMemberRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Performance Tracking!");
});

app.listen(PORT, async () => {
  console.log("Backend is running!");
  await ConnectToDatabase();
});
