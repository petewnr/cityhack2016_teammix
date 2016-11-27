$(document).ready(function(){
  $(".q1").hide();
  $(".q2").hide();
  $(".q3").hide();
  $(".prompt").hide();
  $(".slideshow").hide();
  $(".backbutton").hide();


  $(".youClick").click(function(){
    $(".black").fadeOut(function(){
      $("#about_you").hide();
      $(".q1").fadeIn();
      $(".youClick").removeClass("col-xs-6");
      $(".youClick").removeID("about_you");
      $(".youClick").addClass("col-xs-12");
    });

  });

//next btn
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
      $("#about_others").fadeOut();
    $(".white").fadeOut(function(){
      $(".black").removeClass("col-xs-6");
      $(".black").removeClass("black");
      $(".black").addClass("col-xs-12");
      $(".prompt").fadeIn();
      $(".backbutton").fadeIn();

    });
  });

//backbutton

$(".backbutton").click(function(event){
    event.stopPropagation();
    $(".backbutton").fadeOut();
    $(".slideshow").fadeOut();
    $(".prompt").fadeOut(function(){
    $("#about_others").fadeIn();
    $(".prompt").fadeOut();
    $(".black").removeClass("col-xs-12");
    $(".black").addClass("col-xs-6");
  });

});
  //Slideshow

  $(".tags").click(function(){
    $(".slideshow").fadeIn();

  });
  var slideIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
  }
});

//camera function
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  $(".submitBtn").css("opacity",1);
  $(".cameraButton").css("opacity",0);
};
