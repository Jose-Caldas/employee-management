import mongoose from 'mongoose';

const conect = process.env.MONGO_URL;

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      'mongodb+srv://jrcaldas:c4VNdprzXPAkYlcS@nextjscrud.vl504ad.mongodb.net/?retryWrites=true&w=majority'
    );
    if (connection.readyState === 1) {
      console.log('Database Connected!');
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
