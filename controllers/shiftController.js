const db = require("../models");

module.exports = {
    create: function (req, res) {
        const condition = req.body.id;
        console.log(req.body);
        db.Shifts
            .create(req.body)
            .then(dbShift => {
                res.json(dbShift)

                return db.Employees.findOneAndUpdate({ _id: condition }, { $push: { shifts: dbShift._id } }, { new: true });
            }).catch(err => console.log(err))
    },
    getallEmployees: function (req, res) {
        db.Employees
            .find({ uid: req.params.id })
            .populate({ path: "shifts" })
            // .populate({ path: "shifts" })
            .then((dbEmployees => {
                res.json(dbEmployees)
            }))
            .catch(err => console.log(err));
    },
    findAll: function (req, res) {
        db.Shifts
            .find({ uid: req.params.id })
            .then((dbShift => {
                res.json(dbShift)
            }))
    }
}