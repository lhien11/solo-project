var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'ui.calendar'
]);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'calendarController',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/schedule', {
      templateUrl: 'partials/schedule.html',
      controller: 'scheduleCtl',
      access: {restricted: true}
    })

     .when('/add-contact', {
       templateUrl: 'partials/add-contact.html',
       controller: 'ContactsCtrl',
       access: {restricted: true}
     })

     .when('/add-sample', {
       templateUrl: 'partials/appointmentSample.html',
       controller: 'addAppointmentController as ac',
       access: {restricted: true}
     })
     .when('/add-book', {
       templateUrl: 'partials/bookTime.html',
       controller: 'bookController as newAppointment',
       access: {restricted: true}
     })
    .otherwise({
      redirectTo: '/',
      access: {restricted: false}
    });
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});
