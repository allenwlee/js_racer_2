$(document).ready(function() {

  $("form").on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: '/game/create',
      data: $(this).serialize()
    }).done(function(data){
      $("#game").html(data);
      var board_length = $("#board").val();
      for ( i = 1; i < board_length; i++){
        console.log(i);
        $("#player1_strip").append($("<td></td>"));
        $("#player2_strip").append($("<td></td>"));
        current1 = $("#player1_strip td:first-child").addClass("active");
        current2 = $("#player2_strip td:first-child").addClass("active");
      }
    });
  });

// functionPlayer = function()

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


keyCode: 80 = p
keyCode: 81 = q

$(this).on('keyup', function(e) {

 if (e.keyCode === KEYS.P) {

  $(current2).removeClass("active");
  $(current2).next().addClass("active");
  current2 = $(current2).next();
};
});
