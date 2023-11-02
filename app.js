const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.use(expressLayouts); // Add this line to enable layout support
app.use(express.static("public"));

app.set("layout", "layouts/layout");

// Define your routes
app.use("/", routes); // Use the routes defined in routes.js

// Start the server
app.listen(3000);
