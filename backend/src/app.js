import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// importing routes

import userRouter from './routes/user.route.js'
import shopRoutes from "./routes/shop.route.js";
import invoiceRoute from "./routes/invoice.route.js"


// Public routes

app.get("/", (req, res) => { 
    res.send("Hello from cashmemo api. Everything is working fine."); 

});



// routes declaration

app.use("/api/v1/users", userRouter)

app.use("/api/shops", shopRoutes);

app.use("/api/invoices", invoiceRoute);




export { app };