import Mongoose from "mongoose";

const chatProfileschema = new Mongoose.Schema({
    room_name: String,
    time_online: String
})

export default Mongoose.model("chatprofile", chatProfileschema)