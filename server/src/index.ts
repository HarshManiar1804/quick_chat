import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import Routes from "./routes/index.js";
const app: Application = express();
const PORT = process.env.PORT || 7001;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

// Routes

app.use("/api", Routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
