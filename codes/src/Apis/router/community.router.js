const router = require("express").Router();
const controller = require("../controller/community.controller");

router.get("/post", controller.getPost);
router.get("/post/:condition", controller.getPostWCondition);
router.post("/post", controller.createPost);
router.patch("/post/:id", controller.updatePost);

router.get("/engage", controller.getEngagement); // ! Not yet working
router.get("/engage/vote/:condition", controller.getLikeorDislike);
router.get("/engage/:condition", controller.getCountEngagement);
router.post("/engage", controller.createEngagement);
router.patch("/engage/:id", controller.updateEngagement);
router.delete("/engage/:id/:id1", controller.deleteEngagement);

router.get("/comment", controller.getComment); // ! Not yet working
router.post("/comment", controller.createComment);
router.patch("/comment/:id", controller.updateComment);

module.exports = router;
