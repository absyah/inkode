'use strict';

/**
 * @ngdoc overview
 * @name inkodeApp
 * @description
 * # inkodeApp
 *
 * Main module of the application.
 */

var currentEnv = "dev";
var settings = {
  endpoints: {
    "dev": "",
    "staging": "",
    "production": ""
  },

  endpoint: function() {
    return settings.endpoints[currentEnv];
  }
};


angular
  .module('inkodeApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ]);
