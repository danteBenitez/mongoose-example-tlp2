import { model, Schema } from 'mongoose';

const Person = new Schema({
    names: [String],
    surnames: [String],
    dni: Number,
    cuitCuil: String,
    admissionDate: Date
}, {
    timestamps: true,
});

export const PersonModel = model('Person', Person);
