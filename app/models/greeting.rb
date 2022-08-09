class Greeting < ApplicationRecord
  def self.random_value
    offset = rand(Greeting.count)
    @greeting = Greeting.offset(offset).first
  end
end
