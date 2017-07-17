var db = require("../models");

module.exports = function(app) {

///Show all burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      console.log("In findAll");
      var hbsObject = {
        burgers: data
      };
      console.log(data);
      res.render("index", hbsObject)
    })
  });

  app.post("/user/new", function(req, res){
    db.Burger.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
      sex: req.body.sex,
      birthday:req.body.birthday,
      height: req.body.height,
      weight: req.body.weight,

    }).then(function(response){
      res.redirect("/userpage/" + response.email);
    })
  })

   app.post("/input", function(req, res) {
        db.Burger.create({
            meal_name: req.body.recipeName,
            ingredient1: req.body.ingredient1,
            ingredient2: req.body.ingredient2,
            ingredient3: req.body.ingredient3,
            ingredient4: req.body.ingredient4,
            ingredient5: req.body.ingredient5,
            ingredient6: req.body.ingredient6,
            ingredient7: req.body.ingredient7,
            ingredient8: req.body.ingredient8,
            ingredient9: req.body.ingredient9,
            ingredient10: req.body.ingredient10
        }).then(function(data) {
            var hbsObject = {
                burger: data
            }
            res.redirect("/input");
        });
    })
}