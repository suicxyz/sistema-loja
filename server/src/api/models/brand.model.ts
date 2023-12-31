import mongoose from "../helpers/database";

const BrandSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		require: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Brand", BrandSchema);
