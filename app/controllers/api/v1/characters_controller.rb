class Api::V1::CharactersController < ApplicationController
    before_action :set_character, only: [:show, :edit, :update, :destroy]

    # GET /beers
    # GET /beers.json
    def index
      @characters = Character.all.order(name: :asc)
      render json: @characters
    end
  
    # GET /beers/1
    # GET /beers/1.json
    def show
      if @character
        render json: @character
      else
        render json: @character.errors
      end
    end
  
    # GET /beers/new
    def new
      @character = Character.new
    end
  
    # GET /beers/1/edit
    def edit
    end
  
    # POST /beers
    # POST /beers.json
    def create
      @character = Character.new(beer_params)
  
  
      if @character.save
        render json: @character
      else
        render json: @character.errors
      end
    end
  
    # PATCH/PUT /beers/1
    # PATCH/PUT /beers/1.json
    def update
    end
  
    # DELETE /beers/1
    # DELETE /beers/1.json
    def destroy
      @character.destroy
  
      render json: { notice: 'Character was successfully removed.' }
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_beer
        @character = Character.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def character_params
        params.permit(:name, :movie, :powers, :age)
      end
end
