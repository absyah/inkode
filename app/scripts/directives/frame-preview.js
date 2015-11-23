inkodeApp.directive('framePreview', function($compile) {
  return function($scope, $element) {
    var $body = angular.element($element[0].contentDocument.body),
        $head = angular.element($element[0].contentDocument.head),
        template  = $compile('<div html-viewer="page.html"></div><style>{{page.css}}</style>')($scope),
        style = $compile('<style>{{page.css}}</style>')($scope);
        // javascript = $compile('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js"></script><script html-viewer="page.javascript"></script>')($scope);
    // $body.append(template);
    $head.append(style);
    try { $body.append(template); }
    catch(err) { $body.append(template); }
  };
});