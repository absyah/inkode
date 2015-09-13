'use strict';

/**
 * @ngdoc function
 * @name inkodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inkodeApp
 */
angular.module('inkodeApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    function designInit() {
      $scope.page = {
        design: defaultDesign()
      }
    }

    designInit()

    mailchimpInit();

    function mailchimpInit() {
      $scope.mailchimp = {
        username: 'herokuapp',
        dc: 'us11',
        u: 'f19bab9ca00ea8b1bf55b2209',
        id: 'b64473e5af'
      }
    }

    function defaultDesign() {
      return "<!DOCTYPE html>\n" +
              "<html>\n" +
              "<head>\n" +
              "\t<meta charset='UTF-8'>\n" +
              "\t<title>Inkode | Developer do design</title>\n" +
              "</head>\n" +
              "<body>\n" +
              "\tStart typing here... you can copy and paste your favourite html design as well.\n" +
              "</body>\n" +
              "</html>"
    }

    $scope.addSubscription = function(mailchimp) {
      var mailchimpParams = {
        EMAIL: mailchimp.EMAIL
      }

      $http
        .post('https://herokuapp.us11.list-manage.com/subscribe/post?u=f19bab9ca00ea8b1bf55b2209&id=b64473e5af', mailchimpParams)
        .then(function(response) {
          mailchimpInit();
          $scope.mailchimp.success = true;
        }, function(error) {
          $scope.mailchimp.error = true;
        })
    }

    $scope.resetDesign = function() {
      designInit();
    }

  });
