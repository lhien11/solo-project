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
         //console.log(data.length);
         for (var i = 0; i < data.length; i++){
           var tmpDate = Date.parse(data[i].date);
           var example = new Date(tmpDate);
           //console.log(tmpDate);
           //console.log(example);
           $scope.events.push({
             title: data[i].name,
            //  start: new Date(y, m, 4, 8, 0), allDay: false
            // start: , allDay: false
            start: example, allDay: false
           })


         }



    })};

    someFunction();


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
