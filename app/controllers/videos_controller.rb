class VideosController < ApplicationController

	def search
	end

	def results
		@result = YtSearch.new("viewCount", params[:page_token])
	end
end