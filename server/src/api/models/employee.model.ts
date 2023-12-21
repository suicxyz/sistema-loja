import mongoose from "../helpers/database";

import bcjs from "bcryptjs";

const EmployeeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		require: true
	},
  username: {
		type: String,
		trim: true,
		require: true
	},
  password: {
    type: String,
    trim: true,
    require: true,
    select: false
  },
	phonenumber: {
		type: Number,
		trim: true,
		require: true,
	},
	role: {
		type: String,
		trim: true,
		require: true,
		enum: ["Vendedor", "Administrador"]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

EmployeeSchema.pre("save", async function(next: any) {
	this.password = await bcjs.hash(this.password, 16);
	next();
});

export default mongoose.model("Employee", EmployeeSchema);
