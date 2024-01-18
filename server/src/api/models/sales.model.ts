import mongoose from "../helpers/database";

const SaleSchema = new mongoose.Schema({
	employee: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Employee",
		trim: true,
		required: true
	},
	customer: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Customer",
		trim: true,
		required: true,
	},
	products: [
		{
			item: {
				type: mongoose.SchemaTypes.ObjectId,
				ref: "Product",
				trim: true,
				required: true,
			},
			amount: {
				type: Number,
				trim: true,
				required: true
			}
		}
	],
	payment: [
		{ 
			method: {
				type: String,
				trim: true,
				required: true,
				enum: ["Dinheiro", "Débito", "Crédito", "Pix"],
			},
			value: {
				type: Number,
				trim: true,
				required: true
			},
		}
	],
	change: {
		type: Number,
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Sales", SaleSchema);
