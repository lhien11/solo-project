angular.module('myApp').controller('scheduleCtl', ['$scope', 'appointmentFactory', '$firebaseArray', function($scope, appointmentFactory, $firebaseArray){
  var ref = new Firebase('https://solo-project-a866e.firebaseio.com/appointments');
  $scope.appointments = $firebaseArray(ref);
  //console.log("i'm in the schedule controller");
  //console.log($scope.appointments);
  $scope.showAddForm = function(){
    $scope.addFormShow = true;
  };

  $scope.hide = function(){
    $scope.addFormShow = false;
    $scope.contactShow = false;
};

  $scope.addFormSubmit = function(){
    console.log('Adding appointments');
      // Assignn values
      if($scope.name){ var name = $scope.name; } else { var name = null; }
      if($scope.email){ var email = $scope.email; } else { var email = null; }
      if($scope.phone_number){ var phone_number = $scope.phone_number; } else { var phone_number = null; }
      if($scope.date){ var date = $scope.date; } else { }
      if($scope.location){ var location = $scope.location; } else { var location = null; }
      if($scope.time){ var time = $scope.time; } else {var time = null; }

      // Build Object
      $scope.appointments.$add({
        name: name,
        email: email,
        phone_number: phone_number,
        date: date,
        location: location,
        time: time
      }).then(function(ref){
        var id = ref.key();
        console.log('Added Appointment with ID: ' + id);

        // Clear formCtrl
        clearFields();

        $scope.msg = "Contact Added";
      });
  }
  // $scope.addFormSubmit() = function(){
  //   console.log('Adding Content....');
  //
  //   // Assignn values
  //   if($scope.name){ var name = $scope.name; } else { var name = null; }
  //   if($scope.email){ var email = $scope.email; } else { var email = null; }
  //   if($scope.phone_number){ var phone_number = $scope.phone_number; } else { var phone_number = null; }
  //   if($scope.date){ var date = $scope.date; } else { }
  //   if($scope.location){ var location = $scope.location; } else { var location = null; }
  //   if($scope.time){ var time = $scope.time; } else {var time = null; }
  //
  //   // Build Object
  //   $scope.contacts.$add({
  //     name: name,
  //     email: email,
  //     phone_number: phone_number,
  //     date: date,
  //     loation: location,
  //     time: time
  //   }).then(function(ref){
  //     var id = ref.key();
  //     console.log('Added Appointment with ID: ' + id);
  //
  //     // Clear formCtrl
  //     clearFields();
  //
  //     $scope.msg = "Contact Added";
  //   });
  // };

  function clearFields(){
    console.log('Clearing All Fields...');
    $scope.name = '';
    $scope.email = '';
    $scope.phone_number = '';
    $scope.date = '';
    $scope.location = '';
    $scope.time = '';
};


}]);
