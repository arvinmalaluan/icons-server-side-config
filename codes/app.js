const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/Apis/router");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/v1/auth", routes.authRouter); // ----------> For Authentication Related Routes
app.use("/api/v1/community", routes.communityRouter); // -----> For Community Related Routes
app.use("/api/v1/conversation", routes.conversationRouter); // -----> For Conversation Related Routes
app.use("/api/v1/gallery", routes.galleryRouter); // -----> For Gallery Related Routes
app.use("/api/v1/home-content", routes.homeContentRouter); // -----> For Home Content Related Routes
app.use("/api/v1/message", routes.messageRouter); // -----> For Message Related Routes
app.use("/api/v1/profile", routes.profileRouter); // -----> For Profile Related Routes
app.use("/api/v1/service", routes.serviceRouter); // -----> For Service Related Routes
app.use("/api/v1/startup-info", routes.startupInfoRouter); // -----> For Startup Info Related Routes

module.exports = app;
