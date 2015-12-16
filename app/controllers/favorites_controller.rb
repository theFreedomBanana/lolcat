class FavoritesController < ApplicationController

	def index
		@favorites = current_user.favorites
	end

	def create
		user = current_user
		favorite = user.favorites.new(favorite_params)
		favorite.save
		render nothing: true
	end

	private

		def favorite_params
			params.require(:favorite).permit(:yt_id, :title, :thumbnail)
		end
end