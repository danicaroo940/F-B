 import mongoose from 'mongoose';
 import dotenv from 'dotenv';
 dotenv.config();

 const { MONGO_DB_NAME, MONGO_URI } = process.env;
 const connectionConfig = { dbName: MONGO_DB_NAME };
 const connection = await mongoose.connect(MONGO_URI, connectionConfig);
 if (connection) {
    console.log('Connection with mongo database successfully');
  } else {
    console.error('Error to connect with mongo database');
  }