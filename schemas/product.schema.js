import { model, Schema } from 'mongoose';

const Product = new Schema({
    name: String,
    brand: String,
    salePrice: Number,
    costPrice: Number,
    description: String,
    stock: Number
}, {
    timestamps: true,
});

export const ProductModel = model('Product', Product);


