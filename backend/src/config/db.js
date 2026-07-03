import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECT
        );
        console.log("Ket noi CSDL thanh cong");
    } catch (error) {
        console.error("Loi ket noi CSDL", error);
        process.exit(1); //Thoat khi co loi
    }
}