import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    const connection = await mongoose.connect(MONGO_URI)
    console.log(`Connected to mongo! Database name: ${connection.connections[0].name}`)
}

export default connectDB