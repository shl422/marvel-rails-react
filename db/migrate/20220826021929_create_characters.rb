class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :movie
      t.string :powers
      t.integer :age

      t.timestamps
    end
  end
end
