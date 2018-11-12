//Scroll suavizado  
$(document).ready(function(){
    $("#navbar a ").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});


var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";
      } else {
            document.getElementById("navbar").style.top = "-100px";
      }

      prevScrollpos = currentScrollpos;

      }