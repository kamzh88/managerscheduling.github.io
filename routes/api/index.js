const router = require("express").Router();
const employeeRoutes = require('./employees');

router.use("/employee", employeeRoutes );

module.exports = router;