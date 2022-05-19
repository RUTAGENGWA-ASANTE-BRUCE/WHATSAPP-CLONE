import Mongoose from "mongoose";

const senderSchema = new Mongoose.Schema({
    profileName: String,
    message: String
})

export default Mongoose.model("sender", senderSchema)