const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//I look up what Date will give us and shiftStart.getDay(), it give us the Day.
const ShiftSchema = new Schema({
    shiftStart: {
        type: Date
    },
    shiftEnd: {
        type: Date
    }
});

const Shifts = mongoose.model("Shift", ShiftSchema);

module.exports = Shifts;