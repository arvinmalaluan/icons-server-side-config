const router = require("express").Router();
const controller = require("../controller/service.controller");

router.get("/:id", controller.getService);
router.post("/", controller.createService);
router.patch("/:id", controller.updateProfile);

module.exports = router;
