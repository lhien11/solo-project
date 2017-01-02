myApp.factory('appointmentFactory', function($http){
  var factory = {};
  var appointments = [];

  factory.getAppts = function(callback) {
		$http.get('/getAppts').success(function(output) {
			appointments = output;
			callback(appointments);
		});
	}

	factory.addAppt = function(info, callback) {
		console.log(1);
		$http.post('/addAppt', info).success(function(output) {
			console.log(2);
			console.log(output);
			if('error' in output){
				alert(output.error);
			}
			callback(appointments);
		});
	}

	factory.removeAppointment = function(info, callback) {
		console.log("remove");
		$http.post('/removeAppointment', info).success(function(output) {
			callback(appointments);
		});
	}

	return factory;

});
