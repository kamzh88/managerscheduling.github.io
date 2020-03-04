const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
    StartTime: {
        type: Date,
        required: true
    },
    EndTime: {
        type: Date,
        required: true
    },
    id: {
        type: String
    },
    uid: {
        type: String,
    }
});

const Shifts = mongoose.model("Shift", ShiftSchema);

module.exports = Shifts;