import mongoose from "../helpers/database";

const GroupSchema = new mongoose.Schema({
	name: {
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
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model("Group", GroupSchema);
