const db = require("../models");

module.exports = {
    create: function (req, res) {
        const condition = req.body.id;
        // console.log(req.body);
        db.Shifts
            .create(req.body)
            .then(dbShift => {
                res.json(dbShift)

                return db.Employees.findOneAndUpdate({ _id: condition }, { $push: { shifts: dbShift._id } }, { new: true });
            }).catch(err => console.log(err))
    },
    getShifts: function (req, res) {
        db.Employees
            .find({ uid: "NQfSmKzodGhpdu7dpPl1Z5Kg18b2" })
            .populate({ path: "shifts" })
            // .populate({ path: "shifts" })
            .then((dbShift => {
                res.json(dbShift)
            }))
            .catch(err => console.log(err));
    }
}