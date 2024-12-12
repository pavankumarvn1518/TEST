import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';  // Note the './'
import Razorpay from 'razorpay';
// import cors

dotenv.config();

 export const instance = new Razorpay({
key_id: process.env.Razorpay_key,
key_secret: process.env.Razorpay_Secret,

});


const app = express();

//using middlewares
app.use(express.json());

const port= process.env.PORT;


app.get('/',(req,res)=>{
    res.send("Server is working ");
});
 
app.use("/uploads",express.static("uploads"));

//imporing route
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';


//using route
app.use('/api',userRoutes);
app.use('/api',courseRoutes);
app.use('/api',adminRoutes);



app.listen(5000,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDb();
});
