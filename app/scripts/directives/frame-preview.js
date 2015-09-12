inkodeApp.directive('framePreview', function($compile) {
  return function($scope, $element) {
    var $body = angular.element($element[0].contentDocument.body),
        template  = $compile('<div html-viewer="page.design"></div>')($scope);
    $body.append(template);
  };
});