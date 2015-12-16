class Favorite < ActiveRecord::Base
	belongs_to :user, inverse_of: :favorites
end
