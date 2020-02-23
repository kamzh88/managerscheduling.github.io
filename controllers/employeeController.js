const db = require("../models");

module.exports = {
    create: function (req, res) {
        const condition = req.body.uid
        db.Employees
            .create(req.body)
            .then(dbEmployee => {
                res.json(dbEmployee)
                return db.Users.findOneAndUpdate({ uid: condition }, { $push: { employees: dbEmployee._id } }, { new: true });

            }).catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {  
        db.Employees
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
