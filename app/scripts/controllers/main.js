'use strict';

/**
 * @ngdoc function
 * @name applicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the applicationApp
 */
angular.module('applicationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.user = [{
        name: "Jonas Duri",
        email: "jd@oygo.com",
        profile: {
            bio: "some bio",
            profile_image : "/uploads/profile.jpg"
        }
    }];
  });
