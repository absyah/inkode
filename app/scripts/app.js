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


var inkodeApp = angular.module('inkodeApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.ace',
    'ngDragDrop',
    'mailchimp'
  ]);
