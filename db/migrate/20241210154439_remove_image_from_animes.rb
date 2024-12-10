class RemoveImageFromAnimes < ActiveRecord::Migration[7.0]
  def change
    remove_column :animes, :image, :string
  end
end
