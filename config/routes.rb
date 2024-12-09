Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'animes/index'
      get 'animes/create'
      get 'animes/show'
      get 'animes/destroy'
    end
  end

  root "home#index"
  get '/*path' => 'home#index'
end