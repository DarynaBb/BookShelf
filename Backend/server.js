import express from "express";
import "dotenv/config";
import { connectMongoose } from "./utils/connectMongoose.js";
import router from "./routes/bookRouter.js";

const PORT = process.env.PORT || 3001;

const connect = await connectMongoose();
const app = express();
app.use(express.json());

app.use("/", router)

app.listen(PORT, () => {
    console.log(`I am running in port ${PORT}`);
});
