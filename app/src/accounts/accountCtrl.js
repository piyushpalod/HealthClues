function AccountCtrl(AccountSvc, $window) {
  var vm = this;
    
  vm.openForm = openForm;
  
  function openForm(url){
	  $window.open(url, '_blank');
  };
  

  AccountSvc.myGetFunction()
    .then(function(response) {
      vm.data = response.data;
    });
}

angular
  .module('app.tools')
  .controller('AccountCtrl', AccountCtrl);
