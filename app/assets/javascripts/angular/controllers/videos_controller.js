var videosController = angular.module('videosController', []);

videosController.controller('mostPopularVideosCtrl', ['$scope','$location', '$routeParams',
	'$http', '$sce', function($scope, $location, $routeParams, $http, $sce) {

		$routeParams["page_token"] ? $scope.url = '/videos/'+$routeParams["order"]+'/'+$routeParams["page_token"]+'/results.json' : $scope.url = '/videos/'+$routeParams["order"]+'/results.json';
		
		$scope.order = $routeParams["order"];

		$http.get($scope.url).success(function(data) {
			$scope.displayedVideoId = data["items"][0].id;
			$scope.displayedVideoUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.displayedVideoId);
			$scope.videos = data["items"];
			$scope.prevPageToken = data["prevPageToken"];
			$scope.nextPageToken = data["nextPageToken"];
		});

		$scope.playThisVid = function(id) {
			$scope.displayedVideoId = id;
			$scope.displayedVideoUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.displayedVideoId);
		};

		$scope.goPrevPage = function() {
			$scope.prevPageToken != null ? $location.path('videos/'+$scope.order+'/'+$scope.prevPageToken) : null;
		};

		$scope.goNextPage = function() {
			$scope.nextPageToken != null ? $location.path('videos/'+$scope.order+'/'+$scope.nextPageToken) : null;
		};

}]);