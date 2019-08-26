var express = require ('express');

var PORT = process.env.PORT || 8000;

var app = express();

var handlebars = require("express-handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger-controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});

