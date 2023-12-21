import mongoose from "../helpers/database";

import bcjs from "bcryptjs";

const CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		require: true
	},
	cpf: {
		type: Number,
		trim: true,
		require: true,
		unique: true
	},
	phonenumber: {
		type: Number,
		trim: true,
		reuire: true,
	},
	email: {
		type: String,
		trim: true,
		require: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Customer", CustomerSchema);
