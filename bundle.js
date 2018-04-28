'use strict';

//for debugging
angular.module('app').config(["$logProvider", function ($logProvider) {
  $logProvider.debugEnabled(true);
}]);

//inject $log to use
// $log.debug('hello!');
'use strict';

AccountCtrl.$inject = ["AccountSvc", "$window"];
function AccountCtrl(AccountSvc, $window) {
  var vm = this;

  vm.openForm = openForm;

  function openForm(url) {
    $window.open(url, '_blank');
  };

  AccountSvc.myGetFunction().then(function (response) {
    vm.data = response.data;
  });
}

angular.module('app.tools').controller('AccountCtrl', AccountCtrl);
'use strict';

AccountDetailCtrl.$inject = ["$rootScope", "$routeParams", "AccountSvc"];
function AccountDetailCtrl($rootScope, $routeParams, AccountSvc) {
  var vm = this;

  $rootScope.$emit('titleChanged', 'account detail');

  AccountSvc.getAccountById($routeParams.accountId, function (account) {
    vm.account = account;
  });
}

angular.module('app.tools').controller('AccountDetailCtrl', AccountDetailCtrl);
'use strict';

AccountSvc.$inject = ["$http"];
function AccountSvc($http) {
  AccountSvc.myGetFunction = function () {
    return $http.get('https://www.healthclues.net/surgemateapi/api/virtualmd.php/getquestions?formID=123');
  };

  AccountSvc.getAccountById = function (accountId, successCallback) {
    $http.get('https://www.healthclues.net/surgemateapi/api/virtualmd.php/getquestions?formID=123').then(function (response) {
      successCallback(response.data);
    });
  };

  return AccountSvc;
}

angular.module('app.tools').factory('AccountSvc', AccountSvc);
'use strict';

angular.module('app.tools').config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/src/accounts/toolList.html',
    controller: 'AccountCtrl',
    controllerAs: 'vm'
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);