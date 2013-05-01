$(document).ready(function() {

  $("form").on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/game/create',
      data: $(this).serialize()
    }).done(function(data){
      var json = $.parseJSON(data)
      
      parseGameData(json);
      // $("#game").html(json);
      $(".gameboard").show();
      
      var board_length = $("#board").val();
      for ( i = 1; i < board_length; i++){
        
        $("#player1_strip").append($("<td></td>"));
        $("#player2_strip").append($("<td></td>"));
        current1 = $("#player1_strip td:first-child").addClass("active");
        current2 = $("#player2_strip td:first-child").addClass("active");
      }
    });
  });

  var Game = function (player1, player2, created_at, id) {
    this.player1 = player1,
    this.player2 = player2,
    this.created_at = created_at


  }

  function parseGameData(json) {
    var player1, player2, created_at, id

    var game = json['game'];
    for (var obj in game) {
      created_at = game[obj].created_at;
      id = game[obj].id;
    }
    var p1 = json['player1']
    for (var obj in p1) {
      player1 = p1[obj].name;
    }
    var p2 = json['player2']
    for (var obj in p2) {
      player2 = p2[obj].name;
    }

    current_game = new Game (player1, player2, created_at, id)
    console.log(current_game)
  }
  // function Player () { this.name = name }


  function finish_line (player) {
    // var versus1 = $("#versus1").text();
    $("#winner").text(player + " WINS!").fadeIn(function() {
      $("#restart").fadeIn();
    });

    $("#restart").on("click", function(){
      $("#winner").fadeOut();
      $(this).fadeOut();
      current1 = $("#player1_strip td:first-child").addClass("active");
      current2 = $("#player2_strip td:first-child").addClass("active");
    });
    // $(".container").append('<img id='jkai' src="GoodJobSon.png" />');    
  }



  var KEYS = {P: 80,Q: 81};
  $(this).on('keyup', function(e) {
    if (e.keyCode === KEYS.Q) {
      $(current1).removeClass("active");
      $(current1).next().addClass("active");
      current1 = $(current1).next();
      if (current1.index() === $("#player1_strip td:last-child").index()) {
        current1.removeClass("active");
        current2.removeClass("active");
        finish_line("player1");
      }
    }
  });

  $(this).on('keyup', function(e) {
    if (e.keyCode === KEYS.P) {
      $(current2).removeClass("active");
      $(current2).next().addClass("active");
      current2 = $(current2).next();
      var versus2 = $("#versus2").text();
      if (current2.index() === $("#player1_strip td:last-child").index()) {
        current2.removeClass("active");
        current1.removeClass("active");
        finish_line("player2");
      }
    }
  });



});


// keyCode: 80 = p
// keyCode: 81 = q

// $(this).on('keyup', function(e) {

//  if (e.keyCode === KEYS.P) {

//   $(current2).removeClass("active");
//   $(current2).next().addClass("active");
//   current2 = $(current2).next();
// };
// });
