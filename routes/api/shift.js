const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

router.route("/")
    .post(shiftController.create);

module.exports = router;