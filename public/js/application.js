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





  var KEYS = {P: 80,Q: 81};
  $(this).on('keyup', function(e) {
    if (e.keyCode === KEYS.Q) {
      $(current1).removeClass("active");
      $(current1).next().addClass("active");
      current1 = $(current1).next();
      if (current1.index() === $("#player1_strip td:last-child").index()) {
        current1.removeClass("active");
        current2.removeClass("active");
        var versus1 = $("#versus1").text();
        $(".container").append(" " + versus1 + "WINS");
        // $(".container").append('<img id='jkai' src="GoodJobSon.png" />');
        current1 = $("#player1_strip td:first-child").addClass("active");
        current2 = $("#player2_strip td:first-child").addClass("active");

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
        current1  .removeClass("active");
        $(".container").append(" "+ versus2 + "PLAYER 2 WINS");
        current1 = $("#player1_strip td:first-child").addClass("active");
        current2 = $("#player2_strip td:first-child").addClass("active");

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
