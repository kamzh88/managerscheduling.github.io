const router = require("express").Router();
const employeeRoutes = require('./employees');
const userRoutes = require('./user');

router.use("/user", userRoutes);
// router.use("/employee", employeeRoutes );



module.exports = router;