'use strict';

/**
 * @ngdoc directive
 * @name applicationApp.directive:mainFooter
 * @description
 * # mainFooter
 */
angular.module('applicationApp')
  .directive('mainFooter', function () {
    return {
      templateUrl: 'views/partials/main-footer.html',
      restrict: 'A'
    };
  });
