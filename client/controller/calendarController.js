angular.module('myApp')
.controller('calendarController', ['$scope', '$q', 'appointmentFactory', function ($scope, $q, appointmentFactory) {
  // var events = [
  //     { title: "Mom's Birthday", start: new Date(2017, 0, 2) },
  //     { title: "Anniversary Party", start: new Date() },
  //     { title: "Business Conference", start: new Date(2014, 8, 22), end: new Date(2014, 8, 24) }
  // ];
  console.log("Hereis calendar-controller");

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var data;



  $scope.events = [
    {title: 'All Day Event',start: new Date(y, m, 1)},
    {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    ];

    console.log(new Date(y, m, d + 1, 19, 0));
    // console.log("date", date);
    // console.log("d", d)
    // console.log("m", m);
    // console.log('y', y);

    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 2, 19, 0), allDay: false,
        // end: new Date(y, m, 3),
        className: ['openSesame']
      });
    };

    var someFunction = function(){
      appointmentFactory.getAppointment().success(function(response){
         //console.log('response ', response);
         data = response;
         console.log("data", data);
         console.log("data.name ", data[0].name);
         console.log("data.date ", typeof(data[0].date));
         console.log("data.time ", data[0].time);

        //  console.log(moment().toDate(date[0].date));
         $scope.events.push({
           title: data[0].name,
           start: new Date(y, m, 4, 8, 0), allDay: false
         })



    })};

    data = someFunction();
    console.log('data ', data);


// $scope.remove(3);

//console.log($scope.events);

    /* event sources array */
  $scope.eventSources = [$scope.events];
  $scope.alertOnEventClick = function( date, jsEvent, view){
    $scope.alertMessage = (date.title + ' was clicked ');
};
  $scope.calOptions = {
      editable: true,
      header: {
          left: 'month, agendaWeek, agendaDay',
          center: 'title',
          right: 'today prev, next'
      },
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
  };

}]);
