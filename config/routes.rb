Rails.application.routes.draw do
  
  root "profiles#index"

  resources :profiles

  namespace :api do
    namespace :v1 do
      resources :profile, only: [:show, :update, :create]
    end
  end
  
end
