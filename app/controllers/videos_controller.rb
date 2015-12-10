class VideosController < ApplicationController

	def index
		api_request = YtSearch.new("viewCount")
		@results = api_request.response["items"]
	end

end