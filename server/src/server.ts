import { config } from "dotenv";
import api from "./api";
config();

const PORT = process.env.PORT || 3001;

api.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}.`);
});