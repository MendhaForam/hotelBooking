import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
import {v2 as cloudinary} from "cloudinary"
import myHotelRoutes from "./routes/my-hotels.js"
import hotelRoutes from "./routes/hotels.js"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


mongoose.connect(process.env.MONGODB_CONNECTION_STRING);


const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: process.env.FRONTEND_URL,  
    credentials: true,               
  }))

// app.use(express.static(path.join(__dirname,"../../frontend")))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/my-hotels", myHotelRoutes)
app.use("/api/hotels",hotelRoutes)

// app.get("*", (req,res)=>{
//   res.sendFile(path.join(__dirname,"../../frontend/index.html"))
// })

app.listen(7000, ()=>{
    console.log("Server running on localhost: 7000")
})