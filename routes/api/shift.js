const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

router.route("/")
    .post(shiftController.create)

router
    .route("/:id")
    .get(shiftController.getallEmployees)
    .delete(shiftController.remove);

router.
    route("/all/:id")
    .get(shiftController.findAll);

module.exports = router;