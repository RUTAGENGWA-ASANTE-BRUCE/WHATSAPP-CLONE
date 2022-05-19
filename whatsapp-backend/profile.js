import Mongoose from "mongoose";

const profileSchema = new Mongoose.Schema({
    profilePicture: String
})

export default Mongoose.model("profilepicture", profileSchema)