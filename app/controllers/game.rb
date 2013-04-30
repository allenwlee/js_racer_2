
post '/game/create' do
   p params
   @game = Game.create

   @player1 = Player.create(name: params[:name1], game_id: @game.id)
   @player2 = Player.create(name: params[:name2], game_id: @game.id)
   @game.players << @player1
   @game.players << @player2
   @board_length = params[:board_length]
  erb :_board, :layout => false
end
