import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});