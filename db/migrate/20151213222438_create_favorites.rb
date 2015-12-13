class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :yt_id
      t.string :thumbnail
      t.string :views
      t.integer :rating

      t.timestamps null: false
    end
  end
end
