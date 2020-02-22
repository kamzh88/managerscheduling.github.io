const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

router.route("/")
    .post(employeeController.create)
    .get(employeeController.findAll);

module.exports = router;