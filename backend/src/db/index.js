import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_URI}/${DB_NAME}`
        );
        console.log("MongoDB Connected!!");
        // console.log(connectionInstance);
    } catch (error) {
        console.log("MongoDB Connection Failed!!")
        console.log(error.message);
    }
};

export default connectDB;
