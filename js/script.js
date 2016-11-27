$(document).ready(function(){
  $(".q1").hide();
  $(".q2").hide();
  $(".q3").hide();
  $(".prompt").hide();
  $(".slideshow").hide();
  $(".backbutton").hide();

  var flag = true;

  var descText ="";
  var identity = "";
  var imgName = "";
  var value={};

  $(".youClick").click(function(){
    if (flag){
    $(".black").fadeOut(function(){
      $("#about_you").hide();
      $(".q1").fadeIn();
      $(".youClick").removeClass("col-xs-6");
      $(".youClick").addClass("col-xs-12");
    });
    flag=false;
  }

  });

//next btn
  $(".button1").click(function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(".q2").fadeIn();
    });
    descText = $(".q1 textarea").val();
  });

  $(".button2").click(function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(".q3").fadeIn();
    });
    identity = $(".q2 textarea").val();
  });

  $(".button3").click(function(event){
    event.stopPropagation();
    $(".q3").fadeOut(function(){
      $("#about_you").fadeIn();
      $(".white").removeClass("col-xs-12");
      $(".white").addClass("col-xs-6");
      $(".black").fadeIn();
      $(".button3").css("opacity",0);
    });
    flag=true;
    document.getElementById('output').removeAttribute('src');

    //largest img id + 1 =imgName

    value={"experience":descText,"identity":identity, "probe_id":1,"datadate":$.now()};
    console.log(value);
    value=$.parseJSON(value);

    $.ajax({
      type: "POST",
      url: "http://13.54.61.35:8080/api/probedata/",
      data: value,
      success: function(){
        console.log("done");
      },
      dataType: "json"
    });

    // send value to database

  });

  $(".black").click(function(){
      $("#about_others").fadeOut();
    $(".white").fadeOut(function(){
      $(".black").removeClass("col-xs-6");
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
    $(".white").fadeIn();

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
  $(".button3").css("opacity",1);
  $(".cameraButton").css("opacity",0);
};
