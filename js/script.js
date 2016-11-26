$(document).ready(function(){
  $(".q1").hide();
  $(".q2").hide();
  $(".q3").hide();
  $(".prompt").hide();



  $(".white").click(function(){
    $(".black").fadeOut(function(){
      $("#about_you").hide();
      $(".q1").fadeIn();
      $(".white").removeClass("col-xs-6");
      $(".white").addClass("col-xs-12");
    });

  });

  $(".button1").click(function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(".q2").fadeIn();
    });
  });

  $(".button2").click(function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(".q3").fadeIn();
    });
  });

  $(".button3").click(function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
      $("#about_you").fadeIn();
      $(".white").removeClass("col-xs-12");
      $(".white").addClass("col-xs-6");
      $(".black").fadeIn();

    });
  });

  $(".black").click(function(){
    $(".white").fadeOut(function(){
      $("#about_others").hide();
      $(".black").removeClass("col-xs-6");
      $(".black").addClass("col-xs-12");
    });
  });

});
