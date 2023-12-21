import mongoose from "../helpers/database";

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		require: true
	},
	description: {
		type: String,
		trim: true,
		require: true
	},
	type: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Type",
		trim: true,
		require: true
	},
	group: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Group",
		trim: true,
		require: true
	},
	brand: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Brand",
		trim: true,
		require: true
	},
	vendor: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Vendor",
		trim: true,
		require: true
	},
	purchasePrice: {
		type: Number,
		trim: true,
		require: true
	},
	sellPrice: {
		type: Number,
		trim: true,
		require: true
	},
	active: {
		type: Boolean,
		trim: true,
		require: true,
		default: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Product", ProductSchema);
