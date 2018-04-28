angular
  .module('app.tools')
  .config(function($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/src/accounts/toolList.html',
        controller: 'AccountCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({                  
      enabled: true,
      requireBase: false
    });
  });