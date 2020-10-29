

function verifyGiuliaMarkup() {
    if (!$("div.GiuliaMarkup").length) {
      //first html piece of code
      $('div.maincover').prepend(`<div class="parallax"><img src="../2040/img/Eye 8.png" class="logo"></div>`);
      
      //second html piece of code
      $('div#CoverWrapper').append(`
      <div class="GiuliaMarkup">
        <div id="readingTime"></div>
        <div id="listeningTime"></div>
        <div id="icons">
          <i id="listening" class="fa fa-microphone" aria-hidden="true"></i>
        </div>
        <div id="ListeningWrapper">
          <div id="audiobox">
              <i class="fa fa-play" id ="play-btn" aria-hidden="true"></i>
              <i class="fa fa-pause" id ="pause-btn" aria-hidden="true"></i>
          </div>
        </div>
      </div>`);
      
      //third html piece of code
      $('div#ArticleBody').append(`
      <div id="Footerimg"><img src="../2040/img/sust_3.png" class="footerimg"></div>
      `);
    }
  }

$(document).ready(function() {
    responsiveVoice.cancel();

    verifyGiuliaMarkup();
    
    //IMPORTANT TO GET ARTICLE TEXT BEFORE HIDING MAIN CONTENT
    var ArticleText = document.getElementById("ArticleBody").textContent;

    
    //LISTENING FUNCTIONS

    document.getElementById("listening").onclick = function() {
        document.getElementById("listeningTime").style = 'display:block;';
        document.getElementById("ListeningWrapper").style = 'display:block;';
        document.getElementById("play-btn").style="display:none;"
        document.getElementById("pause-btn").style="display:block;"
        responsiveVoice.speak(ArticleText);
    };

    document.getElementById("pause-btn").onclick = function() {
        responsiveVoice.pause();
        document.getElementById("play-btn").style="display:block;"
        document.getElementById("pause-btn").style="display:none;"
    };

    document.getElementById("play-btn").onclick = function() {
        responsiveVoice.resume();
        document.getElementById("pause-btn").style="display:block;"
        document.getElementById("play-btn").style="display:none;"
    };
});
    // reading time depending on number of character
$( document ).ready(function() {
    if ($("#ContentWrapper").text().length <= 2500) {
        $("#readingTime").html("Reading time 5 minutes");
    }
    else if ($("#ContentWrapper").text().length > 2500 && $("#ContentWrapper").text().length <= 7500) {
        $("#readingTime").html("Reading time 7 minutes");
    }
    else if ($("#ContentWrapper").text().length > 7500) {
        $("#readingTime").html("Reading time 10 minutes");
    }
});

$( document ).ready(function() {
    if ($("#ContentWrapper").text().length <= 2500) {
        $("#listeningTime").html("Listening time 5 minutes");
    }
    else if ($("#ContentWrapper").text().length > 2500 && $("#ContentWrapper").text().length <= 7500) {
        $("#listeningime").html("Listening time 7 minutes");
    }
    else if ($("#ContentWrapper").text().length > 7500) {
        $("#listeningTime").html("Listening time 10 minutes");
    }
});