Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'animes/index'
      post 'animes/create'
      get '/show/:id', to: 'animes#show'
      delete '/destroy/:id', to: 'animes#destroy'
    end
  end
  
  direct :rails_blob do |blob|
    Rails.application.routes.url_helpers.rails_blob_path(blob, only_path: true)
  end

  direct :rails_blob_representation do |representation|
    Rails.application.routes.url_helpers.rails_blob_representation_path(representation, only_path: true)
  end

  root "home#index"
  get '*path', to: 'home#index', constraints: ->(req) { req.format.html? }
end