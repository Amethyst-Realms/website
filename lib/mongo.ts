import { MongoClient  } from 'mongodb'
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}


export default async function connect() {
	if (mongoose.connection.readyState !== 1) {
		await mongoose.connect("mongodb+srv://website:8Lv24OcNX8rCBqFs@cluster0.xbk5q.mongodb.net/?retryWrites=true&w=majority", {
			//VScode says process.env.DB_LINK is undefined, but it works
			serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
			socketTimeoutMS: 10000, // Close sockets after 10 seconds of inactivity
		});
	}
}

const GunSchema = new mongoose.Schema({
  ammo: Number,
  ammo_type: String,
  //name: string
})

export const Gun = mongoose.models.Guns || mongoose.model('Guns', GunSchema)