

$(document).ready(function(){
  //IMPORTANT TO GET ARTICLE TEXT BEFORE HIDING MAIN CONTENT

    var ArticleText = document.getElementById("ArticleBody").textContent;

    var status = null;
    
    responsiveVoice.cancel();

    $("#ContentWrapper").hide();
    $("#ListeningWrapper").hide();
    $("#readingTime").hide();
    $("#listeningTime").hide();
    //LISTENING FUNCTION 

    document.getElementById("listening").onclick = function() {
        document.getElementById("ListeningWrapper").style = 'display:block;';
        $("#ContentWrapper").hide();
        $("#readingTime").hide();
        $("#listeningTime").show();
        if (status == null) {
          responsiveVoice.speak(ArticleText);
          status = "played";
        }
    };
    
    document.getElementById("pause-btn").onclick = function() {
      responsiveVoice.pause();
    };

    document.getElementById("play-btn").onclick = function() {
      responsiveVoice.resume();
    };

    
    //$("#reading").mouseover(function(){
    //    $("#reading").css("opacity", "0.5");
    //  });
    
    $("#reading").click(function(){
        $("#ContentWrapper").show();
        $("#listeningTime").hide();
        document.getElementById("ListeningWrapper").style = 'display:none;';
        $("#readingTime").show();
        responsiveVoice.cancel();
        //$("#time").append("Reading");
    });
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

