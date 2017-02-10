var _ = require('underscore');
var fs = require('fs');


var twitterHandlers = require('./json/twitterHandlers');

var already_tweeted_993 = require('./json/already_tweeted_993_1');
var already_tweeted_980 = require('./json/already_tweeted_980_2');
var already_tweeted_49738 = require('./json/already_tweeted_49738_3.json');


var uniqTwitterHandlers = _.difference(_.uniq(twitterHandlers), already_tweeted_993, already_tweeted_980, already_tweeted_49738);

    fs.writeFile('./json/uniqTwitterHandlers.json', JSON.stringify(uniqTwitterHandlers, null, 2), function (err) {
      if (err) return console.log(err);
    });


