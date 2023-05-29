import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nextjscrud.vl504ad.mongodb.net/?retryWrites=true&w=majority`
    );
    if (connection.readyState === 1) {
      console.log('Database Connected!');
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
