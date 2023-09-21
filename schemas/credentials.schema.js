import { model, Schema } from 'mongoose';

const Credential = new Schema({
    soldDate: Date,
    paymentForm: String,
    payment: Number,
    personId: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
}, {
    timestamps: true,
});

export const CredentialModel = model('Credential', Credential);

