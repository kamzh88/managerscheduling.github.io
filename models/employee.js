const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    uid: {
        type: String, 
    },
    firstName: {
        type: String,
        required: "First Name is Required"
    },
    lastName: {
        type: String,
        required: "Last Name is Required"
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shifts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Shift"
        }
    ]
});

const Employees = mongoose.model("Employee", EmployeeSchema);

module.exports = Employees;