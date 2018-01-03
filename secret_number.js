'use strict';
module.exports = function() {
   let result = Math.random()* (1000000-1)+1;
   return function () {
       return result;
    }
};