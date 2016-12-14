angular.module('myApp')
.factory('appointmentFactory', function(){
  var appointmentFactory = {};

  var appointments = [];

  appointmentFactory.getAllAppointments = function() {
    return appointments;
  }

  appointments.createAppointment = function(appointment, appointmentList)
  {
    appointments.push(appointment);
    appointmentList = appointments;
    return appointmentList;
  }
  return appointmentFactory;
})
