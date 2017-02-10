var _ = require('underscore');

// var file = "./json/profiles.json"
var file = "./json/omar_profiles.json"
var json = require(file);
var fs = require('fs');
var webshot = require('webshot');

var options = {
  renderDelay: 40000,
  screenSize: {
    width: 515,     
    height: 485
  },
  shotSize: {
    width: 500,
    height: 485
  }
}

var ssCount = "./json/ssCount.json"
var ssCountJson = require(ssCount);



// this for profiles.json
// var size = 708;
// // var size = 100;
// var additionBy = 1;
// var min = 707;
// var max = 708;
// var interval;

// this is for omar_profiles.json

// var size = 310;
// // var size = 100;
// var additionBy = 5;
// var min = 295;
// var max = 300;
// var interval;


var size = ssCountJson[0].size;
// var size = 100;
var additionBy = 5;
var min = ssCountJson[0].min;
var max = ssCountJson[0].max;
var interval;






console.log("min: ", min, "max: " , max, "size: ", size)


interval = setInterval(function() {
  var screenshot = function(users){
    for (var j = min; j < max; j++) {
      console.log("screenshot of user :", j, users[j].screen_name)

      webshot('http://localhost:3000/screenshot/' + users[j].screen_name, 'images/omar_screenshots/400/' + users[j].screen_name + '.png', options, function(err) {
        if(err) throw err;
      });
      users[j].screenshot_path = 'images/screenshot/' + users[j].screen_name + '.png';

      if(max == size) {
        clearInterval(interval);
      }
    }
    if(max < size) {    
      min = max;
      max +=additionBy; 
      if(max >= size) {
        max = (size % additionBy) + Math.floor(size/additionBy)*additionBy;
        console.log("max", max)


        var q = ssCountJson.shift();
        console.log("q", q);

        fs.writeFile(ssCount, JSON.stringify(ssCountJson, null, 2), function (err) {
          if (err) return console.log(err);
        });
      }
    } 


    fs.writeFile(file, JSON.stringify(users, null, 2), function (err) {
      if (err) return console.log(err);
    });


    
    return users;
  }(json)


}, 20000);  




