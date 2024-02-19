const router = require("express").Router();
const controller = require("../controller/message.controller");

router.get("/:id", controller.getMessage);
router.post("/", controller.createMessage);
router.patch("/:id", controller.updateMessage);

module.exports = router;
