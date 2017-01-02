myApp.controller('addAppointmentController', ['$scope', '$http', function($scope, $http) {


    console.log("Here in People Controller");


    var refresh = function(){
      $http.get('/contactlist').success(function(response){
        // console.log("I got the data I requested");
        $scope.contactlist = response;
        $scope.contact = "";
      })}

    //     $http({
    //       method: 'GET',
    //       url: '/contactlist'
    //       // headers: {
    //       //   id_token: idToken
    //       // }
    //     }).then(function(response){
    //       console.log("I got the data I requested", response);
    //       $scope.contactlist = response.data;
    //       $scope.contact = "";
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
    $scope.addContact = function() {
      console.log('add person');
      //console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(response){
        console.log(response);
        refresh();
      });
    };

    $scope.remove = function(id) {
      console.log('delete call in controller ');
      $http.delete('/contactlist/' + id)
        .then(function(req, res){
          refresh();
        },
        function(req, res){
          console.log("delete error: ", res);
        });
    };

    $scope.edit = function(id){
      console.log('edit function in controller ', id);
      $http.get('/contactlist/' + id)
        .then(function(req, res){
          $scope.contact = req.data;
          //console.log(response);
          console.log("req in client is ", req);
        },
        function(req, res){
          console.log('Error in editing', res);
        });
    };

    $scope.update = function(id){
      console.log("update function: ", $scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact)
        .then(function(res, req){
          refresh();
        },
        function(res, req){
          console.log('Error in updating', res);
        });
    };

    $scope.deselect = function(){
      $scope.contact = "";
    }



}]);
