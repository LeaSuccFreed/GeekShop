import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
import config from './config';
import data from './data.js';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js'
import orderRouter from './routes/orderRouter.js';

dotenv.config()
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URI || mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

}).catch(error => console.log(error.reason))

const app = express();
const PORT = process.env.PORT || 5000
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../frontend/build'))
}

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})