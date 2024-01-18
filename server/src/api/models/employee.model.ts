import { NextFunction } from "express";
import mongoose from "../helpers/database";

import bcjs from "bcryptjs";

const EmployeeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	username: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true,
		select: false
	},
	phonenumber: {
		type: Number,
		trim: true,
		required: true,
	},
	role: {
		type: String,
		trim: true,
		required: true,
		enum: ["Vendedor", "Administrador"]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

EmployeeSchema.pre("save", async function (next: NextFunction) {
	this.password = await bcjs.hash(this.password, 16);
	next();
});

export default mongoose.model("Employee", EmployeeSchema);
