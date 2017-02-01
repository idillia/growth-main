import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const profiles =   [
{"id": "712173",
  "screen_name": "scrappymcgyver",
  "name": "Scrappy McGyver",
  "followers": 2348,
  "creation_date": "Mon May 14 14:08:07 +0000 2007",
  "image_url": "https://pbs.twimg.com/profile_images/799313498673057792/7HmCDrIb_400x400.jpg",
  "time_zone": "Pacific Time (US & Canada)",
  "creation_date_filter": true,
  "is_everyday_filter": false,
  "folowers_count_filter": false,
  "tweets": [
   "Aug 29, 2016 7:06 PM",
   "Apr 21, 2016 11:43 AM",
   "Apr 21, 2016 11:39 AM",
   "Jun 12, 2014 8:03 AM",
   "May 21, 2014 4:57 PM",
   "Mar 25, 2014 11:21 AM",
   "Sep 16, 2010 9:42 PM",
   "Aug 19, 2010 6:33 AM",
   "Jul 29, 2010 4:17 PM",
   "Jul 15, 2010 9:05 AM",
   "Jul 14, 2010 12:17 PM",
   "Jul 13, 2010 9:06 AM"
  ],
  "pa": [
   [
    "Protector",
    "Idealist",
    "Caretaker"
   ]
  ],
  "sw": [
   [
    "Success-oriented",
    "Focused",
    "Painstaking",
    "Original",
    "Sensitive",
    "Realistic"
   ]
  ],
  "pabs": [
   "A methodical, analytical thinker, you take a strategic approach to plans and goals, and you're confident and efficient in pursuing them."
  ]
 }
 ];




class ProfileApi {
  static getAllProfiles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], profiles));
      }, delay);
    });
  }


}

export default ProfileApi;