var videosController = angular.module('videosController', []);

videosController.controller('mostPopularVideosCtrl', ['$scope','$location', '$routeParams',
	'$http', '$sce', '$httpParamSerializerJQLike', function($scope, $location, $routeParams, $http, $sce, $httpParamSerializerJQLike) {

		$routeParams["page_token"] ? $scope.url = '/videos/'+$routeParams["order"]+'/'+$routeParams["page_token"]+'/results.json' : $scope.url = '/videos/'+$routeParams["order"]+'/results.json';
		
		$scope.order = $routeParams["order"];

/* Get searched videos
   ------------------- */
		$http.get($scope.url).success(function(data) {
			$scope.displayedVideoId = data["items"][0].id;
			$scope.displayedVideoTitle = data["items"][0].title;
			$scope.displayedVideoThumbnail = data["items"][0].thumbnail;
			$scope.videoUrl = "http://www.youtube.com/embed/" + $scope.displayedVideoId;
			$scope.trustedVideoUrl = $sce.trustAsResourceUrl($scope.videoUrl);
			$scope.videos = data["items"];
			$scope.prevPageToken = data["prevPageToken"];
			$scope.nextPageToken = data["nextPageToken"];
		});

/* Change displayed video datas
   ---------------------- */
		$scope.changeDisplVidDatas = function(id, title, thumbnail) {
			$scope.displayedVideoId = id;
			$scope.displayedVideoTitle = title;
			$scope.displayedVideoThumbnail = thumbnail;
		};

/* Display cliked video
   ---------------------- */
		$scope.playThisVid = function(id, title, thumbnail) {
			$scope.changeDisplVidDatas(id, title, thumbnail);
			$scope.videoUrl = "http://www.youtube.com/embed/" + $scope.displayedVideoId;
			$scope.trustedVideoUrl = $sce.trustAsResourceUrl($scope.videoUrl);
		};

/* Pagination
   ---------- */
		$scope.goPrevPage = function() {
			$scope.prevPageToken != null ? $location.path('videos/'+$scope.order+'/'+$scope.prevPageToken) : null;
		};

		$scope.goNextPage = function() {
			$scope.nextPageToken != null ? $location.path('videos/'+$scope.order+'/'+$scope.nextPageToken) : null;
		};

/* Add video to favorite
   -------- */
		var div = document.getElementById('div-user-data');
		$scope.userId = div.getAttribute("data-user-id");
		$scope.postFavoriteUrl = Routes.user_favorites_path($scope.userId);

		$scope.addFavorite = function() {
			$http({method: 'POST',
				url: $scope.postFavoriteUrl,
				data: $httpParamSerializerJQLike({"favorite": {yt_id: $scope.displayedVideoId, title: $scope.displayedVideoTitle, thumbnail: $scope.displayedVideoThumbnail}}),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			});
		};
}]);