$(document).ready(function(){

     $(".listbox, .listboxLie").mouseover(function(){
        $(this).css("background-color", "#E8D284");
        $(this).css("color", "white");
    });
    $(".listbox, .listboxLie").mouseout(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    });

    $(".listbox").click(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#DB6F6F");
      $(this).css("border", "2px solid #DB6F6F");
      $("h3").replaceWith("<h3> Wrong, Try Again </h3>");
      $("h3").css({"text-align": "center", "color": "#DB6F6F"});
      $(this).mouseover(function(){
            $(this).css("background-color", "white");
            $(this).css("color", "#DB6F6F");
          });
     $(this).mouseout(function(){
         $(this).css("background-color", "white");
         $(this).css("color", "#DB6F6F");
         location.reload();
     });
    });

    $(".listboxLie").click(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#56A589");
      $(this).css("border", "2px solid #56A589");
      $("h3").replaceWith("<h3> Correct </h3>");
      $("h3").css({"text-align": "center", "color": "#56A589"});
      $(this).mouseover(function(){
            $(this).css("background-color", "white");
            $(this).css("color", "#56A589");
          });
     $(this).mouseout(function(){
         $(this).css("background-color", "white");
         $(this).css("color", "#56A589");
         location.reload();
     });
    });


    });
