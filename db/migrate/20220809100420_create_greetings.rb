# frozen_string_literal: true

class CreateGreetings < ActiveRecord::Migration[6.1] # rubocop:todo Style/Documentation
  def change
    create_table :greetings do |t|
      t.string :name

      t.timestamps
    end
  end
end
