class GamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players do |t|
      t.references :game, :player
    end
  end
end
