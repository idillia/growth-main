var Twit = require('twit');
var moment = require('moment');
var config = require('./config').AmandaGoodCo;
var fs = require('fs');
var T = new Twit(config);
var _ = require('underscore');
var fs = require('fs');

var file = './json/profiles.json';
var readyTweetUsers = require(file);

 var twitterHandlers = [];


var today = moment().format('LLL');

// Start Grace at 200
var size = 315;
var additionBy = 1;
var min = 305;
var max = 306;
var interval;

// var size = readyTweetUsers.length;
// var additionBy = 1;
// var min = 0;
// var max = 1;
// var interval;

interval = setInterval(function() { 
  for (var j = min; j < max; j++) {
    tweetStrenghCardWithMedia(readyTweetUsers, j)
    if(max == size) {
      clearInterval(interval);
    }
  }
  if(max < size) {    
    min = max;
    max +=additionBy; 
    if(max >= size) {
      max = (size % additionBy) + Math.floor(size/additionBy)*additionBy;
    }
  }  
}, 350 * 1000);


function tweetStrenghCardWithMedia(users, i) {
  var screen_name;
  var url;

    screen_name = '' + users[i]['screen_name'];
    url = "http://goodco.company/" + screen_name; 

    var chooseRandomTweet = function (){
      var rand;
      var tweet = [
        "Hi @" + screen_name + ",we created a profile for you based on your friends’ answers! Is this accurate?" + url,
        "Hey @" + screen_name + ", we made a psychometric profile for you based on your Twitter! Is it accurate?" + url,
        "Hey @" + screen_name + ", we created a psychometric personality profile for you! Is it accurate?" + url,
        "Hey @" + screen_name + ", here are your personality strengths! Do you agree?" + url,
        "Hi @" + screen_name + ", we created a profile for you based on your friends’ answers! Is this accurate?" + url,
        "Hey @" + screen_name + ", we made a psychometric profile for you based on your Twitter! Is it accurate?" + url,
        "Hey @" + screen_name + ", we created a psychometric personality profile for you! Is it accurate?" + url,
        "Hey @" + screen_name + ", here are your personality strengths! Do you agree?" + url,
        "What’s up @" + screen_name + ", we made a personality profile for you! What do you think?" + url,
        "Hey @" + screen_name + ", we made a personality profile for you! Please tell us if it’s accurate!" + url,
        "Hi @" + screen_name + ", check out the psychometric profile we made for you! What do you think?" + url,
        "What’s up @" + screen_name + ", check out the personality profile we made for you! Do you agree?" + url,
        "Hello @" + screen_name + ", check out the psychometric personality profile we made for you! Do you agree?" + url,
        "How are you @" + screen_name + ",check out the personality profile we made for you! Do you agree with it?" + url
      ]
      rand = _.random(0, tweet.length-1);

      return tweet[rand];
    }();


    var filename = "images/screenshots/" + screen_name + ".png";

    var params = {
      encoding: 'base64'
    }

    var b64 = fs.readFileSync(filename, params);

    T.post('media/upload', {media_data: b64}, uploaded);
    
    
    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: chooseRandomTweet,
        media_ids: [id]
      }
    
      T.post('statuses/update', tweet, tweeted);

      function tweeted(err, data, response) {
        if (err) {
          console.log("OH NO some error, ", err)
        } else {
          console.log("Posted!")
        }
      }
    }

    readyTweetUsers[i].posted_time = today;
    readyTweetUsers[i].status_action = "PostedMediaByAmanda"
    
    // readyTweetUsers[i].num = i;


    // console.log("rt", readyTweetUsers)
    fs.writeFile(file, JSON.stringify(readyTweetUsers, null, 2), function (err) {
      if (err) return console.log(err);
    });


   
    twitterHandlers.push(_.pluck(readyTweetUsers, 'screen_name')[i]);
      // console.log(twitterHandlers)
      console.log("Amanda posted users :", i, users[i].screen_name, users[i].num)


    fs.writeFile('./json/already_tweeted.json', JSON.stringify(twitterHandlers, null, 2), function (err) {
      if (err) return console.log(err);
    });
} 
   

