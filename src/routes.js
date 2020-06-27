const express = require('express');
const routes = express.Router();

const data = require('../data');

routes.get("/", function(req, res)  {
    return res.redirect("/home");
});

routes.get("/home", function(req, res)  {
    return res.render("home", { recipes: data });
});

routes.get("/about", function(req, res)  {
    return res.render("about");
});

routes.get("/recipesList", function(req, res) {
    return res.render("recipesList", { recipes: data });
});

routes.get("/recipes/:index", function(req, res) {
    const recipes = data;
    const recipeIndex = req.params.index;
        if(!recipes[recipeIndex]) {
            return res.send("Recipe not found!")
        }

        return res.render("recipes", { recipes: recipes[recipeIndex] });
});


module.exports = routes;