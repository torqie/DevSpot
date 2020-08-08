const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users");
const postRoutes = require("./posts");
const questionsRoutes = require("./questions");
const techNews = require("./technews");

// Book routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/questions", questionsRoutes);
router.use("/technews", techNews);

module.exports = router;