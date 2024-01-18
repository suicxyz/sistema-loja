import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);
// mongoose.connect(
// 	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hdalw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
// );
mongoose.connect("mongodb://127.0.0.1:27017/sistema-loja");
mongoose.Promise = global.Promise;

export default mongoose;
