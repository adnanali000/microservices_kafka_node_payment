import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}))

app.use(express.json())

app.post("/payment-service",async(req,res)=>{
    const {cart} = req.body;
    //ASSUME THAT WE GET THE COOKIE AND DECRYPT THE USER ID
    const userId = "123";

    //TODO: PAYMENT MODULE
    console.log("Api endpoint hit")

    //KAFKA

    return res.status(200).send("Payment successful")
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).send(err.message)
})

app.listen(8000,()=>{
    console.log("Payment service is running on port 8000")
})