'use strict';

/**
 * @ngdoc function
 * @name patternlibApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the patternlibApp
 */
angular.module('patternlibApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
