var db = require("../models");

module.exports = function(app) {

///Show all burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject)
    })
  });

  app.post("/", function(req, res){
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured:false,

    }).then(function(data){
      var hbsObject = {
        burger: data
      }
      res.redirect("/");
    })
  })

  app.post("/:id", function(req, res) {
    db.Burger.update({
      devoured: true,
    },{
      where:{
        id: req.params.id
      }
    }).then(function(data) {
        var hbsObject = {
            burger: data
        }
        res.redirect("/");
    });
  })
}