const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    date: { type: Date, default: Date.now },
    dateHired: { type: Date, required: true },
    dateTerminated: { type: Date, required: false },
    employeed: {
        type: Boolean,
        default: true
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;