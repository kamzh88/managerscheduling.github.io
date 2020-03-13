const db = require("../models");

module.exports = {
    create: function (req, res) {
        const condition = req.body.uid
        db.Employees
            .create(req.body)
            .then(dbEmployee => {
                res.json(dbEmployee)
                return db.Users.findOneAndUpdate({ uid: condition }, { $push: { employees: dbEmployee._id } }, { new: true });
            }).catch(err => {
                res.status(422).json(err)
            });
    },
    findbyId: function (req, res) {
        db.Users
            .findOne({ uid: req.params.id })
            .populate("employees")
            .then((dbEmployee) => res.json(dbEmployee))
            .catch(err => res.status(422).json(err));
    }
}
