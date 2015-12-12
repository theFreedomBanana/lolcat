var lolCat = angular.module('lolCat', [
	'ngRoute',
	'videosController'
	]);

lolCat.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
	controller: 'mostPopularVideosCtrl',
	templateUrl: 'angular_views/search_results'
	})
	.when('/videos/:page_token?', {
	controller: 'mostPopularVideosCtrl',
	templateUrl: 'angular_views/search_results'
	});
	
	// Permet de se débarrasser du '#/' dans les url. Va avec le <base href='/'> 'dans application.html'
	$locationProvider.html5Mode(true);

}]);