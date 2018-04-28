function AccountCtrl(AccountSvc, $window) {
  var vm = this;
  
    
  vm.myProperty = 'my property';
  vm.openForm = openForm;
  
  function openForm(url){
	  $window.open(url, '_blank');
  };
  

  AccountSvc.myGetFunction()
    .then(function(response) {
      vm.accounts = response.data;
    });
}

angular
  .module('app.accounts')
  .controller('AccountCtrl', AccountCtrl);
