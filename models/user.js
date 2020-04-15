const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	email: {
    type: String,
		unique: true,
		match: [/.+@.\..+/, "Please enter a valid email address"]
	},
	auth_id: {
		type: String
	},
	tasks: [
		{
			type: Schema.Types.ObjectId,
			ref: "Task"
		}
	]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;