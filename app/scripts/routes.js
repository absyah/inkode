inkodeApp.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise(function($injector){
    var $state = $injector.get('$state');
    $state.go("main");
  });

  // Now set up the states
  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
  })

}]);