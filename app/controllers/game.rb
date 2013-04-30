
post '/game/create' do
   p params
   @game = Game.create
   p @game.id
   @player1 = Player.create(name: params[:name1], game_id: @game.id)
   @player2 = Player.create(name: params[:name2], game_id: @game.id)
   @game.players << @player1
   @game.players << @player2
   p @player1
   p @player2
  erb :_board
end
