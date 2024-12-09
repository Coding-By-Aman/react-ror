class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :image, null: false
      t.float :rating


      t.timestamps
    end
  end
end
