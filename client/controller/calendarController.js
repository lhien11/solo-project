angular.module('myApp')
.controller('calendarController', ['$scope', '$q', 'appointmentFactory', function ($scope, $q, appointmentFactory) {

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var data;

  $scope.events = [

  ];


  var someFunction = function(){
    appointmentFactory.getAppointment().success(function(response){
      data = response;

      for (var i = 0; i < data.length; i++){
        var tmpDate = Date.parse(data[i].date);
        var example = new Date(tmpDate);


         if(data[i].time == "8:00 AM"){
           example.setHours(8);
         }
         if(data[i].time == "9:00 AM"){
           example.setHours(9);
         }
         if(data[i].time == "10:00 AM"){
           example.setHours(10);
         }
         if(data[i].time == "11:00 AM"){
           example.setHours(11);
         }
         if(data[i].time == "12:00 PM"){
           example.setHours(12);
         }
         if(data[i].time == "1:00 PM"){
           example.setHours(13);
         }
         if(data[i].time == "2:00 PM"){
           example.setHours(14);
         }
         if(data[i].time == "3:00 PM"){
           example.setHours(15);
         }
         if(data[i].time == "4:00 PM"){
           example.setHours(16);
         }
         if(data[i].time == "5:00 PM"){
           example.setHours(17);
         }

        $scope.events.push({
          title: data[i].name,
          start: example, allDay: false
        })
      }
    })};

    someFunction();

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
