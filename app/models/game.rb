class Game < ActiveRecord::Base
  has_and_belongs_to_many :players
  # validates :only_two

  # def only_two
  #   puts "find me"
  #   p self.players.count
  #   errors.add(:player_count, "You need two freaking players dude.") unless self.players.count == 2
  # end
end
