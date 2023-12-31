import mongoose from "../helpers/database";

const VendorSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		require: true
	},
	cpfCnpj: {
		type: Number,
		trim: true,
		require: true,
		unique: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Vendor", VendorSchema);
