Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'characters/index'
      post 'characters/create'
      delete 'characters/:id', to: 'charcters#destroy'
    end
  end

  root 'characters#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end