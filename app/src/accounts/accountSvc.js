function AccountSvc($http) {
  AccountSvc.myGetFunction = function() {
    return $http.get('https://www.healthclues.net/surgemateapi/api/virtualmd.php/getquestions?formID=123');
  }
  
  AccountSvc.getAccountById = function(accountId, successCallback) {
    $http.get('https://www.healthclues.net/surgemateapi/api/virtualmd.php/getquestions?formID=123')
      .then(function(response) {        
            successCallback(response.data);
      });
  }
  
  return AccountSvc;
}

angular
  .module('app.accounts')
  .factory('AccountSvc', AccountSvc);