$(document).ready(function () {
    $('.carousel').carousel({
        interval: 1300
    });
    $('.carousel').carousel('cycle');
});

$(document).ready(function () {
    $('.carousel2').carousel({
        interval: 2000
    });
    $('.carousel2').carousel('cycle');
});

var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 

$(function() {
    var selectedClass = "";
    $(".filter").click(function(){ 
        selectedClass = $(this).attr("data-rel"); 
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300); 
    });
});
