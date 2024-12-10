Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      resource '/rails/active_storage/*', headers: :any, methods: [:get, :post, :delete, :options]
    end
  end
  