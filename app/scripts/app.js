'use strict';

/**
 * @ngdoc overview
 * @name patternlibApp
 * @description
 * # patternlibApp
 *
 * Main module of the application.
 */
angular
  .module('patternlibApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/navigation', {
        templateUrl: '/views/navigation.html',
        controller: 'NavigationCtrl',
        controllerAs: 'navigation'
      })
      .when('/forms', {
        templateUrl: '/views/forms.html',
        controller: 'FormsCtrl',
        controllerAs: 'forms'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
