class Api::V1::AnimesController < ApplicationController
  before_action :set_anime, only: [:show, :destroy]

  def index
    puts "AnimesController#index"
    animes = Anime.all.order(created_at: :desc)
    render json: animes.map { |anime| serialize_anime(anime) }
  end

  def create
    @anime = Anime.new(anime_params)
    if @anime.save    
      # if params[:anime][:image].present?
      #   @anime.image.attach(params[:anime][:image])
      # end
      render json: @anime
    else
      render json: @anime.errors
    end
  end
  

  def show

    puts "AnimesController#show"
    puts url_for(@anime.image)
    render json: {
      id: @anime.id,
      name: @anime.name,
      description: @anime.description,
      image: @anime.image.attached? ? url_for(@anime.image) : nil
    }
  end
  

  def destroy
    @anime&.destroy
    render json: { message: "Anime deleted successfully" }
  end

  private

  def set_anime
    @anime = Anime.find(params[:id])
  end

  def anime_params
    params.require(:anime).permit(:name, :description, :image)
  end

  def serialize_anime(anime)
    {
      id: anime.id,
      name: anime.name,
      description: anime.description,
      image: anime.image.attached? ? url_for(anime.image) : nil,
      created_at: anime.created_at,
      updated_at: anime.updated_at
    }
  end
end
