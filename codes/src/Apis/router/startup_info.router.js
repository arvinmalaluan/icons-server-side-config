const router = require("express").Router();
const controller = require("../controller/startup_info.controller");

router.get("/:id", controller.getStartupInfo);
router.post("/", controller.createStartupInfo);
router.patch("/:id", controller.updateStartupInfo);

module.exports = router;
