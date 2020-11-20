import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js'
import orderRouter from './routes/orderRouter.js';
import path from 'path'

dotenv.config()
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/carShop';
const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.MONGODB_URI || mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

}).catch(error => console.log(error.reason))

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

const __dirname  = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')))

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})