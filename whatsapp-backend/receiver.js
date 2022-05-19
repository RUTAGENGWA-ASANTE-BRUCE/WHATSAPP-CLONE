import Mongoose from "mongoose";

const receiverSchema = new Mongoose.Schema({
    profileName: String,
    message: String
})

export default Mongoose.model("receiver", receiverSchema)