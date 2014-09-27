'use strict';

/**
 * @ngdoc overview
 * @name applicationApp
 * @description
 * # applicationApp
 *
 * Main module of the application.
 */
angular
  .module('applicationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html'
            });
  }]);
