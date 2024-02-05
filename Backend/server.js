import express from "express";
import "dotenv/config";
import { connectMongoose } from "./utils/connectMongoose.js";
// import router from "./routes/userRouter.js";
import authRouter from "./routes/authRoutes.js";
import bookRouter from "./routes/bookRouter.js";
import cookieParser from "cookie-parser"
import cors from "cors"



const PORT = process.env.PORT || 3001;

await connectMongoose();
const app = express();
app.use( cors({
    origin: process.env.CLIENT_URL,
    credentials: true 
  }) );

 console.log(process.env.CLIENT_URL); 
  
app.use(express.json());

app.use( cookieParser() );


// app.use("/", router)
app.use("/", authRouter)
app.use("/", bookRouter)

app.listen(PORT, () => {
    console.log(`I am running in port ${PORT}`);
});
