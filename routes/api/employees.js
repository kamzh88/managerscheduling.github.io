const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

router.route("/")
    .post(employeeController.create);

router
    .route("/:id")
    .get(employeeController.findbyId);

module.exports = router;