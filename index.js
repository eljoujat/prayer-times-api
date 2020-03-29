'use strict'

let pt=require("./PrayTimes.js")


pt.setMethod("UOIF")

pt.tune({fajr: -66, dhuhr: -56,asr:-61,maghrib:-57,isha:-88})
console.log(pt.getTimes(new Date(), [48.52, 2.20], +2));



var tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+2);





console.log("Tomorrow ")

console.log(pt.getTimes(tomorrow, [48.52, 2.20], +2));

