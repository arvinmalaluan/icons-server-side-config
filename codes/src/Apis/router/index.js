// index.js
const authRouter = require("./auth.router");
const communityRouter = require("./community.router");
const conversationRouter = require("./conversation.router");
const galleryRouter = require("./gallery.router");
const homeContentRouter = require("./home_content.router");
const messageRouter = require("./message.router");
const profileRouter = require("./profile.router");
const serviceRouter = require("./service.router");
const startupInfoRouter = require("./startup_info.router");

module.exports = {
  authRouter,
  communityRouter,
  conversationRouter,
  galleryRouter,
  homeContentRouter,
  messageRouter,
  profileRouter,
  serviceRouter,
  startupInfoRouter,
};
