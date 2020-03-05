const db = require("../models");

module.exports = {
    create: function (req, res) {
        const condition = req.body.id;
        db.Shifts
            .create(req.body)
            .then(dbShift => {
                res.json(dbShift)

                return db.Employees.findOneAndUpdate({ _id: condition }, { $push: { shifts: dbShift._id } }, { new: true });
            }).catch(err => res.status(422).json(err))
    },
    getallEmployees: function (req, res) {
        db.Employees
            .find({ uid: req.params.id })
            .populate({ path: "shifts" })
            .then((dbEmployees => {
                res.json(dbEmployees)
            }))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Shifts
            .find({ uid: req.params.id })
            .then((dbShift => {
                res.json(dbShift)}))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Shifts.findById(req.params.id)
            .then(dbShift => dbShift.remove())
            .then(dbShift => res.json(dbShift))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Shifts.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbShift => res.json(dbShift))
        .catch(err => res.status(422).json(err));
    }
};