import mongoose from "../helpers/database";

const TypeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Type", TypeSchema);
