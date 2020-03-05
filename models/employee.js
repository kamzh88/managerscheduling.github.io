const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    uid: {
        type: String,
    },
    firstName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/\(*\d{3}\)*( |-)*\d{3}( |-)*\d{4}/, "Please enter a valid phone number"]
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