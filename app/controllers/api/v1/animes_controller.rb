class Api::V1::AnimesController < ApplicationController
  before_action :set_anime, only: [:show, :destroy]
  def index
    puts "AnimesController#index"
    animes = Anime.all
    render json: animes
  end

  def create
    anime = Anime.create(anime_params)
    render json: anime
  end

  def show
    render json: @anime
  end

  def destroy
    @anime.destroy
    render json: { message: "Anime deleted successfully" }
  end

  private

  def set_anime
    @anime = Anime.find(params[:id])
  end

  def anime_params
    params.require(:anime).permit(:name, :description, :image)
  end
end
