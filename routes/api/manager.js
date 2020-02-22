const router = require("express").Router();
const firebaseController = require("../../controllers/managerController");

router.route("/")
    .create(firebaseController.create)

module.exports = router;