var Cake = require('../models/cake');
var Rating = require('../models/rating')

module.exports = {
  cakes: function(req, res){
    console.log("Yum!");
    Cake.find({}).populate("ratings").exec(function(err, cakes){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({err: err, data: ""})
        }
        else {
            // respond with JSON
           res.json({err: "", data: cakes})
        }
     })
  },
  bake: function(req, res){
    console.log("Mama Mia!");
    console.log(req.body);
    var newCake = new Cake({baker: req.body.baker, img: req.body.img});
    newCake.save(function (err, cake){
      console.log(cake);
      res.json({err: err, data: cake});
    });
  },
  rate: function(req, res){
    console.log("Don't judge me!!");
    console.log("rating contains",req.body);
    var newRate = new Rating({star: req.body.star, comment: req.body.comment});
    newRate.save(function (err, rating){
      if(err){
         console.log("Returned error", err);
         res.json({err: err, data: ""})
      }
      else {
        console.log("This is rating", rating);
        console.log("This is newRate", newRate);
        var cake = Cake.findByIdAndUpdate({_id: req.body.cakeId}, {$push: {ratings: newRate._id}}, function(err, cakes){
          if(err){
             console.log("Returned error", err);
              // respond with JSON
             res.json({err: err, data: ""})
          }
          else {
              // respond with JSON
            console.log("This is cakes", cakes);
            res.json({err: "", data: cakes})
          }
        });
      }
    });

  }
}
