'use strict';

/**
 * @ngdoc function
 * @name inkodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inkodeApp
 */
angular.module('inkodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.page = {
      design: defaultDesign()
    }

    function defaultDesign() {
      return "<!DOCTYPE html>\n" +
              "<html>\n" +
              "<head>\n" +
              "\t<meta charset='UTF-8'>\n" +
              "\t<title>Inkode | Developer do design</title>\n" +
              "</head>\n" +
              "<body>\n" +
              "\tStart typing here... you can copy and paste your favourite html design as well. ^_^\n" +
              "</body>\n" +
              "</html>"
    }
  });
