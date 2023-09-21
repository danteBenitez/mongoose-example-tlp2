import { model, Schema } from 'mongoose';

const Sale = new Schema({
    soldDate: Date,
    paymentForm: String,
    personId: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    productSales: [{
        salePrice: Number,
        costPrice: Number,
        soldQuantity: Number,
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
}, {
    timestamps: true,
});

export const SaleModel = model('Sale', Sale);

