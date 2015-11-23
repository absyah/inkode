inkodeApp.directive('htmlViewer', ['$sce', function($sce){
  return {
    scope: {
      htmlViewer: '=',
    },
    template: "<div ng-bind-html='trustedHtml'></div>",
    link: function($scope, iElm, iAttrs, controller) {
      $scope.updateView = function() {
        $scope.trustedHtml = $sce.trustAsHtml($scope.htmlViewer);
      }

      $scope.$watch('htmlViewer', function(newVal, oldVal) {
        $scope.updateView(newVal);
      });
    }
  };
}]);