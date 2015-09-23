'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	(function($){
	  $(function(){

	    $('.button-collapse').sideNav();

	  }); // end of document ready
	})(jQuery); // end of jQuery name space
  });
