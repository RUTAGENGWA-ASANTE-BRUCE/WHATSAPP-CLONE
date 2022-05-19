import Mongoose from "mongoose";

const sideChatSchema = new Mongoose.Schema({
    room_name: String,
    lastMessage: String
})

export default Mongoose.model("sidechats", sideChatSchema)