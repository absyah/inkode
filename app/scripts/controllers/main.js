'use strict';

/**
 * @ngdoc function
 * @name inkodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inkodeApp
 */
inkodeApp.controller('MainCtrl', ['$log', '$resource', '$scope', '$rootScope',
              function ($log, $resource, $scope, $rootScope) {
    
    function designInit() {
      $scope.page = {
        html: defaultHtml(),
        css: '',
        javascript: ''
      }
    }

    designInit()

    $scope.$watch('page', function(newVal) {
      $scope.page = newVal;
    }, true);

    mailchimpInit();

    function mailchimpInit() {
      $scope.mailchimp = {
        username: 'herokuapp',
        dc: 'us11',
        u: 'f19bab9ca00ea8b1bf55b2209',
        id: 'b64473e5af'
      }
    }

    function defaultHtml() {
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

    $scope.resetDesign = function() {
      designInit();
    }

    $scope.addSubscription = function (mailchimp) {
      $scope.subscribeIsDisabled = true;

      var actions,
          MailChimpSubscription,
          params = {},
          url;

      // Create a resource for interacting with the MailChimp API
      url = '//' + mailchimp.username + '.' + mailchimp.dc +
            '.list-manage.com/subscribe/post-json';

      var fields = Object.keys(mailchimp);

      for(var i = 0; i < fields.length; i++) {
        params[fields[i]] = mailchimp[fields[i]];
      }

      params.c = 'JSON_CALLBACK';

      actions = {
        'save': {
          method: 'jsonp'
        }
      };
      MailChimpSubscription = $resource(url, params, actions);

      // Send subscriber data to MailChimp
      MailChimpSubscription.save(
        // Successfully sent data to MailChimp.
        function (response) {
          // Define message containers.
          mailchimp.errorMessage = '';
          mailchimp.successMessage = '';

          // Store the result from MailChimp
          mailchimp.result = response.result;

          // Mailchimp returned an error.
          if (response.result === 'error') {
            $scope.subscribeIsDisabled = false;
            if (response.msg) {
              // Remove error numbers, if any.
              var errorMessageParts = response.msg.split(' - ');
              if (errorMessageParts.length > 1)
                errorMessageParts.shift(); // Remove the error number
              mailchimp.errorMessage = errorMessageParts.join(' ');
            } else {
              mailchimp.errorMessage = 'Sorry! An unknown error occured.';
            }
          }
          // MailChimp returns a success.
          else if (response.result === 'success') {
            mailchimp.successMessage = response.msg;
          }

          //Broadcast the result for global msgs
          $rootScope.$broadcast('mailchimp-response', response.result, response.msg);
        },

        // Error sending data to MailChimp
        function (error) {
          $scope.subscribeIsDisabled = false;
          $log.error('MailChimp Error: %o', error);
        }
      );
    };

  }]);
