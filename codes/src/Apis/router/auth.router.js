const router = require("express").Router();
const controller = require("../controller/auth.controller");

router.post("/signin", controller.authSignin);
router.post("/signup", controller.authSignup);

module.exports = router;
