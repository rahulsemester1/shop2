import express from "express"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv"

import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';



import Productroutes from "./Routes/productRoute.js";
import authRoutes from "./Routes/authRoutes.js";

const __filename = fileURLToPath(import.meta.url);   //for dirname
const __dirname = dirname(__filename);
const app=express();
dotenv.config();
const port=process.env.PORT || 4000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/images",express.static("./images"));
app.use("/assets",express.static(path.join(import.meta.dirname,"../E-Commerce/src/assets")));


//Connection to MongoDB 
mongoose.connect("mongodb+srv://rahulsharmachd25:rarashna5@cluster420.i55hr.mongodb.net/E-Commerce");



//API's
app.use("/api/v1",Productroutes)   //upload
app.use("/api/v1/users",Productroutes)       
app.use("/api/v1/auth",authRoutes)      
 

app.listen(port,(error)=>{
   if(!error){
      console.log(`App is listening on port ${port}`)
   }
   else{
      console.log("Error:",error)
   }
})