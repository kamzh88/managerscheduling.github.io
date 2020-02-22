const db = require("../models");


module.exports = {
    create: function(req, res) {
        // console.log(req.body);
        db.Employees
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
