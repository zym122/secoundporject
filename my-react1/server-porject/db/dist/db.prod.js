"use strict";var MongoClient=require("mongodb").MongoClient,url="mongodb://localhost:27017",dbName="porject",connect=function(){return new Promise(function(t,r){MongoClient.connect(url,{useUnifiedTopology:!0},function(n,e){n?r(n):t(e),console.log("Connected successfully to server")})})},find=function(c,i){return new Promise(function(t,r){var e,o;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(connect());case 2:e=n.sent,o=e.db(dbName),o.collection(c).find(i||{}).toArray(function(n,e){n?r(n):t(e)}),e.close();case 7:case"end":return n.stop()}})})},insert=function(c,i){return new Promise(function(t,r){var e,o;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(connect());case 2:e=n.sent,o=e.db(dbName),o.collection(c).insertMany(i,function(n,e){n?r(n):t(e)}),e.close();case 7:case"end":return n.stop()}})})};module.exports={find:find,insert:insert};