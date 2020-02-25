const router = require("express").Router();
const employeeRoutes = require('./employees');
const userRoutes = require('./user');
const shiftRoutes = require('./shift');

router.use("/user", userRoutes);
router.use("/employee", employeeRoutes );
router.use("/shift", shiftRoutes );


module.exports = router;