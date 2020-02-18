const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   userName: {
       type: String,
       trim: true,
       required: "Username is Required"
   },
   uID: {
       type: String, 
   },
   email: {
       type: String,
       unique: true,
       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
   },
   userCreated: {
       type: Date,
       default: Date.now
   },
   employees: [
       {
           type: Schema.Types.ObjectId,
           ref: "Employee"
       }
   ]
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;