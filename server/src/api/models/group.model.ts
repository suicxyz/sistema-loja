import mongoose from "../helpers/database";

const GroupSchema = new mongoose.Schema({
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

export default mongoose.model("Group", GroupSchema);
