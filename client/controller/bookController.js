myApp.controller('bookController', ['$http', 'appointmentFactory', function($http, appointmentFactory){
  var vm = this;

  var getAppointment = appointmentFactory.getAppointment().success(function(response){
    vm.appointment = response;
    vm.contact = "";
  });

  var refresh = function(){
  $http.get('/appointment').success(function(response){
    //console.log("I got the data I requested", response);
    vm.appointment = response;
    vm.contact = "";
  })}

  // add person
  vm.addContact = function() {
    $http.post('/appointment', vm.contact).success(function(response){
      refresh();
    });
  };

  vm.remove = function(id) {
    $http.delete('/appointment/' + id)
      .then(function(req, res){
        refresh();
      },
      function(req, res){
        console.log("delete error: ", res);
      });
  };

  vm.edit = function(id){
    console.log('edit function in controller ', id);
    $http.get('/appointment/' + id)
      .then(function(req, res){
        vm.contact = req.data;
        console.log("req in client is ", req);
      },
      function(req, res){
        console.log('Error in editing', res);
      });
  };

  vm.update = function(id){
    console.log("update function: ", vm.contact._id);
    $http.put('/appointment/' + vm.contact._id, vm.contact)
      .then(function(res, req){
        refresh();
      },
      function(res, req){
        console.log('Error in updating', res);
      });
  };

  vm.deselect = function(){
    vm.contact = "";
  }


}])
