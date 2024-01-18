import mongoose from "../helpers/database";

const BrandSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	group: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Group",
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Brand", BrandSchema);
