import mongoose from 'mongoose';
// user schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    createdAt: {type: Date, required: true}
});

// model reference
const User = mongoose.model("User", userSchema);

export default User;