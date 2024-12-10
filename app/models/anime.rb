class Anime < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  has_one_attached :image

  # belongs_to :genre
  # belongs_to :studio

  validates :name, presence: true
  validates :description, presence: true
  validates :image, presence: true
end
