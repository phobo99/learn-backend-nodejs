import mongoose from 'mongoose';

const connectDB = async () => {
    const uri = process.env.MONGO_URI || '';
    try {
        // mongodb connection string
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB