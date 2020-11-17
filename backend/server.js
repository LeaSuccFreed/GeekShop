import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
import config from './config';
import data from './data.js';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js'
import orderRouter from './routes/orderRouter.js';
import path from 'path'

// const MONGODB_URII = `mongodb+srv://Branislav:Branislav@geekuniverse.psgvz.mongodb.net/<dbname>?retryWrites=true&w=majority`

dotenv.config()
const mongodbUrl = config.MONGODB_URL;
const PORT = process.env.PORT || 8080

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

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('/frontend/build'))
// }

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