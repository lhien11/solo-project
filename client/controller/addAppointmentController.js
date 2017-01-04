myApp.controller('addAppointmentController', ['$http', function($http) {
    //console.log("Here in People Controller");
    var vm = this;


    var refresh = function(){
      $http.get('/contactlist').success(function(response){
        //console.log("I got the data I requested", response);
        vm.contactlist = response;
        vm.contact = "";
      })}

    //     $http({
    //       method: 'GET',
    //       url: '/contactlist'
    //       // headers: {
    //       //   id_token: idToken
    //       // }
    //     }).then(function(response){
    //       console.log("I got the data I requested", response);
    //       vm.contactlist = response.data;
    //       vm.contact = "";
    //     },
    //     function(response){
    //       console.log("get error: ", response.data);
    //     });
    //     // return something here if you want
    //   //}
    //
    // };

    refresh();


    // add person
    vm.addContact = function() {
      console.log('add person');
      //console.log(vm.contact);
      $http.post('/contactlist', vm.contact).success(function(response){
        console.log(response);
        refresh();
      });
    };

    vm.remove = function(id) {
      console.log('delete call in controller ');
      $http.delete('/contactlist/' + id)
        .then(function(req, res){
          refresh();
        },
        function(req, res){
          console.log("delete error: ", res);
        });
    };

    vm.edit = function(id){
      console.log('edit function in controller ', id);
      $http.get('/contactlist/' + id)
        .then(function(req, res){
          vm.contact = req.data;
          //console.log(response);
          console.log("req in client is ", req);
        },
        function(req, res){
          console.log('Error in editing', res);
        });
    };

    vm.update = function(id){
      console.log("update function: ", vm.contact._id);
      $http.put('/contactlist/' + vm.contact._id, vm.contact)
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



}]);
