myApp.factory('appointmentFactory', function($http){
  // console.log('I am in the appointmentFactory');
  var factory = {};
  var appointment = [];

  factory.message = "This is a message from appointmentFactory";

  factory.getAppointment = function(){
    return $http.get('/appointment');
  }

  return factory;
});
