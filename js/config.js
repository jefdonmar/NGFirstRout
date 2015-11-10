let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      controller: ['$scope', function ($scope) {
        $scope.siteTitle = 'Angular!';
      }],
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'PageController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'PageController',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'PageController',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.todontlist', {
      url: '/todonts',
      controller: 'ToDont',
      templateUrl: 'templates/todont.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;