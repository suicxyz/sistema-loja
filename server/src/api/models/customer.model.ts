import mongoose from "../helpers/database";

import bcjs from "bcryptjs";

const CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	cpf: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	phonenumber: {
		type: Number,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Customer", CustomerSchema);
