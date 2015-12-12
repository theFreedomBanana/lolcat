var videosController = angular.module('videosController', []);

videosController.controller('mostPopularVideosCtrl', ['$scope',
	'$http', '$sce', function($scope, $location, $routeParams, $http, $sce) {

		$http.get('/videos/results.json').success(function(data) {
			$scope.displayedVideoId = data["items"][0].id;
			$scope.displayedVideoUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.displayedVideoId);
			$scope.videos = data["items"];
		});

		$scope.playThisVid = function(id) {
			$scope.displayedVideoId = id;
			$scope.displayedVideoUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.displayedVideoId);
		};

}]);