import express, { Application, urlencoded } from "express";
import cors from "cors";
const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
