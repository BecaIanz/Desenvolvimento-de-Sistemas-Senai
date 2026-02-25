import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
    name: string;
    lastName: string;
    age: number;
}

const personSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
});

const Person = mongoose.model<IPerson>('Person', personSchema, "Person");

export default Person;