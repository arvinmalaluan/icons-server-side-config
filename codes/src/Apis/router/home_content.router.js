const router = require("express").Router();
const controller = require("../controller/home_content.controller");

router.get("/", controller.getHomeContent);
router.post("/", controller.createHomeContent);
router.patch("/:id", controller.updateHomeContent);

module.exports = router;
