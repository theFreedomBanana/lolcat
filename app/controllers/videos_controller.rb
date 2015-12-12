class VideosController < ApplicationController

	def search
	end

	def results
		@result = YtSearch.new(params[:order], params[:page_token])
	end
end