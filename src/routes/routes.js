const express = require("express");
const router = express.Router();

// Home Section
router.get("/", (req, res) => {
  res.render("pages/index", { PageTitle: "Home" });
});

// About Section
router.get("/about", (req, res) => {
  res.render("pages/index", { PageTitle: "About" });
});

// Contact Section
router.get("/contact", (req, res) => {
  res.render("pages/index", { PageTitle: "Contact" });
});

// Projects Section
router.get("/projects", (req, res) => {
  res.render("pages/index", { PageTitle: "Projects" });
});

module.exports = router;
