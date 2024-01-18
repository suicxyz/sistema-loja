import mongoose from "../helpers/database";

const VendorSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	cpfCnpj: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Vendor", VendorSchema);
