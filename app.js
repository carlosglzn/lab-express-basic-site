/**
 * 1. IMPORT
 */

const express = require("express");
const app = express();

/**
 * 2. MIDDLEWARE
 */

app.use(express.static("public"));
app.set("view engine", "hbs");

/**
 * 3. ROUTES
 */

app.get("/", (request, response) => {
  response.render("home");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/works", (request, response) => {
  response.render("works");
});

app.get("/gallery", (request, response) => {
  response.render("gallery");
});

/**
 * 4. SERVER
 */

app.listen(3005, () => {
  console.log("Live server in localhost:3005");
});
