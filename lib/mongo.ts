import { MongoClient  } from 'mongodb'
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}


export default async function connect() {
	if (mongoose.connection.readyState !== 1) {
		await mongoose.connect("mongodb+srv://website:8Lv24OcNX8rCBqFs@cluster0.xbk5q.mongodb.net/Rove?retryWrites=true&w=majority", {
			serverSelectionTimeoutMS: 5000, 
			socketTimeoutMS: 10000, 
		});
	}
}

const GunSchema = new mongoose.Schema({
  ammo: Number,
  ammo_type: String,
  //name: string
})

export const Gun = mongoose.models.Gun || mongoose.model('Gun', GunSchema)