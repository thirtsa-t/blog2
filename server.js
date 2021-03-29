import express from "express";
import bodyparse from "body-parser";
import AuthRoutes from './server/routes/AuthRoutes.js';
import blogrouter from './server/routes/blogpostroute.js';
import dotenv from "dotenv";
dotenv.config({path : "./.env"})


const app = express();

app.use(bodyparse.json());

       


app.use('/api/v1/blogpost', AuthRoutes);
app.use ('/api/v1/blogpost/dash',blogrouter);






app.use("/",(req,res)=>{
    res.status(200).send({
        status:200,
        message:"this is blogpost Api"
    })
}) 

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is runnng on port ${port}`);
}) 
export default app;