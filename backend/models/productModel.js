import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image:{type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, default: 0, required: true},
    category: {type: String, required: true},
    countInStock: {type: Number, default: 0, required: true},
    description: {type: String, default: 0, required: true},
    rating: { type: Number, default: 0, required: 0},
    numReviews: {type: Number, default: 0, required: true},
},
{
    timestamps: true,
}
)

const productModel = mongoose.model("Product", productSchema);
export default productModel;