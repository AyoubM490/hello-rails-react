class V1::GreetingsController < ApplicationController
  def index
    @random = Greeting.find(Greeting.pluck(:id).sample)
    render json: @random, status: :ok
  end
end
