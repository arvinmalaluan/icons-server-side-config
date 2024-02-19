const router = require("express").Router();
const controller = require("../controller/gallery.controller");

router.get("/:id", controller.getGallery);
router.post("/", controller.createGallery);
router.patch("/:id", controller.updateGallery);

module.exports = router;
