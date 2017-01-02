angular.module('myApp')
.controller('calendarController', ['$scope', function ($scope) {
  var events = [
      { title: "Mom's Birthday", start: new Date(2017, 0, 2) },
      { title: "Anniversary Party", start: new Date(2014, 8, 19, 19, 30), end: new Date(2014, 8, 2, 22, 30), allDay: false },
      { title: "Business Conference", start: new Date(2014, 8, 22), end: new Date(2014, 8, 24) }
  ];
  console.log("Hereis calendar-controller");

  $scope.eventSources = [events];

  $scope.calOptions = {
      editable: true,
      header: {
          left: 'month, agendaWeek, agendaDay',
          center: 'title',
          right: 'today prev, next'
      }
  };
}]);
