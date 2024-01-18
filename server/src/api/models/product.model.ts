import mongoose from "../helpers/database";

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	description: {
		type: String,
		trim: true,
		required: true
	},
	type: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Type",
		trim: true,
		required: true
	},
	group: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Group",
		trim: true,
		required: true
	},
	brand: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Brand",
		trim: true,
		required: true
	},
	vendor: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Vendor",
		trim: true,
		required: true
	},
	purchasePrice: {
		type: Number,
		trim: true,
		required: true
	},
	sellPrice: {
		type: Number,
		trim: true,
		required: true
	},
	active: {
		type: Boolean,
		trim: true,
		required: true,
		default: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Product", ProductSchema);
