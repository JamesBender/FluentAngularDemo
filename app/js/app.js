window.App = angular.module('app', ['ngRoute']);

App.config(function ($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/hello', {
		templateUrl: "hello.html"
	})
	.when('/goodbye', {
		template: "goodbye"
	})
	.otherwise({
		template: "404!"
	});
});