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

  vm.myProperty = 'my property';
  vm.openForm = openForm;

  function openForm(url) {
    $window.open(url, '_blank');
  };

  AccountSvc.myGetFunction().then(function (response) {
    vm.accounts = response.data;
  });
}

angular.module('app.accounts').controller('AccountCtrl', AccountCtrl);
'use strict';

AccountDetailCtrl.$inject = ["$rootScope", "$routeParams", "AccountSvc"];
function AccountDetailCtrl($rootScope, $routeParams, AccountSvc) {
  var vm = this;

  $rootScope.$emit('titleChanged', 'account detail');

  AccountSvc.getAccountById($routeParams.accountId, function (account) {
    vm.account = account;
  });
}

angular.module('app.accounts').controller('AccountDetailCtrl', AccountDetailCtrl);
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

angular.module('app.accounts').factory('AccountSvc', AccountSvc);
'use strict';

angular.module('app.accounts').config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/src/accounts/account-list.html',
    controller: 'AccountCtrl',
    controllerAs: 'vm'
  }).when('/detail/:accountId', {
    templateUrl: '/app/src/accounts/account-detail.html',
    controller: 'AccountDetailCtrl',
    controllerAs: 'vm'
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
'use strict';

UserCtrl.$inject = ["$rootScope"];
function UserCtrl($rootScope) {
  var vm = this;

  $rootScope.$emit('titleChanged', 'user detail');
}

angular.module('app.users').controller('UserCtrl', UserCtrl);
'use strict';

angular.module('app.users').config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: '/app/src/users/user-list.html',
    controller: 'UserCtrl',
    controllerAs: 'vm'
  });
}]);
'use strict';

HeaderCtrl.$inject = ["$rootScope"];
function HeaderCtrl($rootScope) {
  var vm = this;

  $rootScope.$on('titleChanged', function (event, title) {
    vm.title = title;
  });
}

angular.module('app.header').controller('HeaderCtrl', HeaderCtrl);
'use strict';

function AccountCard() {
  return {
    templateUrl: '/app/src/widgets/accountCard/account-card.html'
  };
}

angular.module('app.widgets').directive('accountCard', AccountCard);
'use strict';

function AccountDetailCard() {
  return {
    templateUrl: '/app/src/widgets/accountDetailCard/account-detail-card.html'
  };
}

angular.module('app.widgets').directive('accountDetailCard', AccountDetailCard);
'use strict';

Info.$inject = ["$log"];
function Info($log) {
  return {
    scope: {
      title: '=infoTitle'
    },
    templateUrl: '/app/src/widgets/info/info.html',
    transclude: true,
    link: function link(scope, element, attributes, controller, transclude) {
      element.find('.content').append(transclude());
    }
  };
}

angular.module('app').directive('info', Info);
'use strict';

function NavHeader() {
  return {
    templateUrl: '/app/src/widgets/navHeader/nav-header.html'
  };
}

angular.module('app.widgets').directive('navHeader', NavHeader);
'use strict';

UserDetail.$inject = ["$rootScope"];
function UserDetail($rootScope) {
  return {
    templateUrl: '/app/src/widgets/userDetail/user-detail.html'
  };
}

angular.module('app.widgets').directive('userDetail', UserDetail);
'use strict';

(function () {
  function Text() {
    return {
      templateUrl: '/app/src/core/input/text/input-text.html'
    };
  }

  angular.module('app.core').directive('inputText', Text);
})();