import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 7001;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.send("It's working 🙌");
});
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
