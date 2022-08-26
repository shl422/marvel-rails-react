# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create(name: 'Stephen Strange', movie: 'Doctor Strange', powers: 'alter time around objects, locations or other beings, moving forward and backward through their existence', age: 42)
Character.create(name: 'Wanda Maximoff', movie: 'Scarlet Witch', powers: 'a lot', age: 29)
Character.create(name: 'Thor Odison', movie: 'Thor', powers: 'Hammer', age: 1500)