'use strict';

/**
 * @ngdoc directive
 * @name applicationApp.directive:mainMenu
 * @description
 * # mainMenu
 */
angular.module('applicationApp')
  .directive('mainMenu', function () {
    return {
      templateUrl: 'views/partials/main-menu.html',
      restrict: 'A',
      require: ['MainCtrl'],
      controller: "MainCtrl"
    };
  });
