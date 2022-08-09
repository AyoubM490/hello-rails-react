module V1
  class GreetingsController < ApplicationController
    def index
      @random = Greeting.find(Greeting.pluck(:id).sample)
      render json: @random, status: :ok
    end
  end
end
