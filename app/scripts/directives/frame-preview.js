inkodeApp.directive('framePreview', function($compile) {
  return function($scope, $element) {
    var $body = angular.element($element[0].contentDocument.body),
        $head = angular.element($element[0].contentDocument.head),
        template  = $compile('<div html-viewer="page.html"></div>')($scope),
        style = $compile('<style>{{page.css}}</style>')($scope);
    $body.append(template);
    $head.append(style);
  };
});