// var tweets = require('./json/tweetText.json');
var omar_profiles = require('./json/omar_profiles.json');
var _ = require('underscore');


// create an object that contains 

var ssObj = {
  size: 310,
  min: 295, 
  max: 300 
}

//create an array of 13676
//start min at 310 and size at 325 and max at 315

var ssNum = [];

var num = 13677;


function ssnGenerator() {
  ssNum.push(ssObj);

  while(ssNum.length){
    ssNum.push(ssObj);
    console.log(ssObj)
    ssObj.size += 15;
    ssObj.min += 15;
    ssObj.max += 15;
    if(ssNum.length == 900) {
      break;
    }
  }


}

// console.log(ssnGenerator())


var array = [];

function generateRandomTweets(pro) {
  var screen_name, url, randTweetInx;
  var tweets = [
    'Hi @ + screen_name + , we created a profile for you based on your friends’ answers! Is this accurate? + url',
    'Hey @ + screen_name + , we made a psychometric profile for you based on your Twitter! Is it accurate? + url',
    'Hey @ + screen_name + , we created a psychometric personality profile for you! Is it accurate? + url',
    'Hey @ + screen_name + , here are your personality strengths! Do you agree? + url',
    'Hi @ + screen_name + , we created a profile for you based on your friends’ answers! Is this accurate? + url',
    'What’s up @ + screen_name + , we made a personality profile for you! What do you think? + url',
    'Hey @ + screen_name + , we made a personality profile for you! Please tell us if it’s accurate! + url',
    'Hi @ + screen_name + , check out the psychometric profile we made for you! What do you think? + url',
    'What’s up @ + screen_name + , check out the personality profile we made for you! Do you agree? + url',
    'Hello @ + screen_name + , check out the psychometric personality profile we made for you! Do you agree? + url',
    'How are you @ + screen_name + ,check out the personality profile we made for you! Do you agree with it? + url',
    'Hi @ + screen_name + . Check out this psychometric profile we made for you! Do you agree? + url',  
    'What’s up @ + screen_name + . Here’s a psychometric profile we made for you! What do you think? + url', 
    'Hello @ + screen_name + . Check out this amazing personality profile we made for you! What do you think? + url', 
    'Hello @ + screen_name + . Check out the personality profile we made for you! Do you agree? + url', 
    'Hi @ + screen_name + . Here’s a psychometric profile we made for you! What do you think? + url', 
    'Hey @ + screen_name + . Here’s a psychometric profile we made for you! Do you agree ? + url', 
    'Good day @ + screen_name + . Here’s a personality profile we made for you! What do you think? + url', 
    'Good day @ + screen_name + . Here’s a psychometric profile we made for you! Do you agree? + url', 
    'What’s up @ + screen_name + ? Here’s a psychometric profile we made for you! What do you think? + url', 
    'Hi @ + screen_name + . What’s up? Here’s a psychometric profile we made for you! What do you think? + url', 
    'What’s up @ + screen_name + ? Here’s a psychometric profile we made for you! Is it accurate? + url', 
    'Good morning @ + screen_name + . Here’s a psychometric profile we made for you! Is it accurate? + url', 
    'How are you @ + screen_name + ? Here’s a personality profile we made for you! Is it accurate? + url',
    'Hi @ + screen_name + , we created a profile for you based on your friends’ answers! Check it out! + url',
    'Hey @ + screen_name + , we made a psychometric profile for you based on your Twitter! Check it out! + url',
    'Hey @ + screen_name + , we created a psychometric personality profile for you! Check it out! + url',
    'Hey @ + screen_name + , here are your personality strengths! Check them out! + url',
    'What’s up @ + screen_name + ? We made a personality profile for you! Check it out! + url', 
    'Hey @ + screen_name + , we made a personality profile for you! Check it out! + url',
    'Good morning @ + screen_name + . Here’s a psychometric profile we made for you! Check it out! + url', 
    'How are you @ + screen_name + ? Here’s a personality profile we made for you! Check it out! + url',
    'Hi @ + screen_name + , we created a profile for you based on your friends’ answers! Take a look! + url',
    'Hey @ + screen_name + , we made a psychometric profile for you based on your Twitter! Take a look! + url',
    'Hey @ + screen_name + , we created a psychometric personality profile for you! Take a look! + url',
    'Hey @ + screen_name + , here are your personality strengths! Take a look! + url',
    'What’s up @ + screen_name + ? We made a personality profile for you! Take a look! + url', 
    'Hey @ + screen_name + , we made a personality profile for you! Take a look! + url',
    'Good morning @ + screen_name + . Here’s a psychometric profile we made for you! Take a look! + url', 
    'How are you @ + screen_name + ? Here’s a personality profile we made for you! Take a look! + url',
    'What’s up @ + screen_name + ? We created a profile for you based on your friends’ answers! Check it out! + url'
  ]
  
  randTweetInx = _.random(0, 43);
  var pickedTweet = tweets[randTweetInx];
  console.log(pickedTweet)

  for(var i =0; i<10; i++) {
    screen_name = pro[i]['screen_name'];
    url = 'http://goodco.company/' + screen_name;

    var regSN ='  + screen_name + ';
    var regUrl =' + url';



var replace = "regex";
var re = new RegExp(replace,"g");
You can dynamically create regex objects this way. Then you will do:

"mystring".replace(re, "newstring");







    array.push(tweets[randTweetInx]);
    console.log(array)
  }

  // fs.writeFile('./json/randomTweet.json', JSON.stringify(tweets, null, 2), function (err) {
  //   if (err) return console.log(err);
  // });
}

generateRandomTweets(omar_profiles);




