angular.module('myApp').controller('scheduleCtl', ['$scope', 'appointmentFactory', '$firebaseArray', function($scope, appointmentFactory, $firebaseArray){
  var ref = new Firebase('https://solo-project-a866e.firebaseio.com/appointments');
  $scope.appointments = $firebaseArray(ref);
  //console.log("i'm in the schedule controller");

  $scope.showAddForm = function(){
    $scope.addFormShow = true;
  };

  $scope.showEditForm = function(appointment){
      $scope.editFormShow = true;

      $scope.id                          = appointment.$id;
      $scope.name                        = appointment.name;
      $scope.email                       = appointment.email;
      $scope.phone_number                = appointment.phone_number;
      $scope.date                        = appointment.date;
      $scope.location                    = appointment.location;
      $scope.time                        = appointment.time;
  };


  $scope.hide = function(){
    $scope.addFormShow = false;
    $scope.appointmentShow = false;
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
        $scope.addFormShow = false;
        $scope.msg = "Appointment Added";
      });
  }

  $scope.editFormSubmit = function(){
        console.log('Updating Appointment...');

        // Get ID
        var id = $scope.id;

        // Get Record
        var record = $scope.appointments.$getRecord(id);

        // Assign values

        record.name                        = $scope.name;
        record.email                       = $scope.email;
        record.phone_number                = $scope.phone_number;
        record.date                        = $scope.date;
        record.location                    = $scope.location;
        record.time                        = $scope.time;

        // Save Appointment
        $scope.appointments.$save(record).then(function(ref){
            console.log(ref.key);
        });

        clearFields();

        // Hide Form
        $scope.editFormShow = false;

        $scope.msg = "Appointment updated";
    };
    $scope.removeAppointment = function(appointments){
    console.log('Removing Appointments');
    $scope.appointments.$remove(appointments);
    $scope.msg="appointments Removed";
};

$scope.showAppointment = function(appointment){
    console.log('Getting Appointemnts....');

    $scope.name             = appointment.name;
    $scope.email            = appointment.email;
    $scope.phone_number     = appointment.phone_number;
    $scope.date             = appointment.date;
    $scope.location         = appointment.location;
    $scope.time             = appointment.time;
    $scope.appointmentShow  = true;

};


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
