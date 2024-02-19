const router = require("express").Router();
const controller = require("../controller/conversation.controller");

router.get("/:id", controller.getConversation);
router.post("/", controller.createConversation);
router.patch("/:id", controller.updateConversation);

module.exports = router;
