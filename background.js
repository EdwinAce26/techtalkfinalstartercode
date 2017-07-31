$(document).ready(function(){ 
    $("#game").hide();
    $("#gamescreen2").hide();
    $("#gamescreen1").hide();
    
$("#start1").click(function (){
    $("#gamescreen1").show();
    $("#start1").hide();
    $("#start2").show();
    $("#board").hide(); 
    $("#game").hide(); 
    $("#gamescreen2").hide();
});

 
$("#start2").click(function (){
    $("#gamescreen2").show();
    $("#gamescreen1").hide();
    $("#start2").hide();
    $("#board").show(); 
    $("#game").show(); 
    $("#start1").show();
});

var counter =  $("#count").text();
var counter = parseInt(counter);  

    function isTouching() {
        var blueLeft = $("#blue").offset().left;
        var redLeft = $("#red").offset().left;
        var blueRight = blueLeft + $("#blue").width();
        var redRight = redLeft + $("#red").width();
    
        var blueTop = $("#blue").offset().top;
        var redTop = $("#red").offset().top;
        var blueBottom = blueTop + $("#blue").height();
        var redBottom = redTop + $("#red").height();
        
        if(blueRight > redLeft && blueLeft < redRight && blueTop < redBottom && blueBottom > redTop) {
            return true;
        }
       return false;
}


$("body").keydown(function(event) {
    
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 25);
    
    } else if (event.which === 39) {
       $("#blue").css("left", $("#blue").offset().left + 25);
    } 
    else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top - 25);
    } 
    else if (event.which === 40) {
       $("#blue").css("top", $("#blue").offset().top + 25);
    } 
 
    else {
        return;
    }

if(isTouching() ){
    var mathRandom = Math.floor((Math.random() * 750) + 1);
    $("#red").animate({ left: mathRandom }, 500);
    $("#red").animate({ top: mathRandom }, 500); 
    counter = counter +1;
    $("#count").text(counter);
    // alert(mathRandom);
    }

});

if(counter === 100){
    alert("Congrats you actually did it!");
}else if(counter === 50){
    alert("you're only half way there!!")
}
        
        $("body").keydown(function(event) {
    
    if (event.which === 37) {
        $("#mario").css("left", $("#mario").offset().left - 20);
    } else if (event.which === 39) {
      $("#mario").css("left", $("#mario").offset().left + 20);
    }  else if (event.which === 32) {
      $("#mario").css("top", $("#mario").offset().bottom - 20);
    }else {
        return;
    }

    // // else if (event.which === 38) {
    // //     $("#mario").css("top", $("#mario").offset().top - 20);
    // // } 
    // // else if (event.which === 40) {
    // //   $("#mario").css("top", $("#mario").offset().top + 20);
    // }
    
});

function marioJump(pixels){
    $("#mario").animate({"bottom": "+=" + pixels},200,
    function() {
        $("#mario").animate({ "bottom" : 60}, 150);
    });
    }
    
});