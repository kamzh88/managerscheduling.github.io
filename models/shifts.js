const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({
    StartTime: {
        type: Date
    },
    EndTime: {
        type: Date
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