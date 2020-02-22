const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

router.route("/")
    .post(employeeController.create);

module.exports = router;