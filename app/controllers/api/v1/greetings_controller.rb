class Api::V1::GreetingsController < ApiController
  def index
    @greeting = Greeting.order(Arel.sql('RANDOM()')).first
  end
end
