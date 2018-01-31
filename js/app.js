/*
  ------------------------
  FILE: app.js
  CREATED: 04.12.2017
  CREATED BY: Karel Nguyen
  VERSION: 1.00
  ------------------------
*/

$(document).foundation();

$(document).ready(function() {
    $(".dots").hide();
    $("#1").addClass("active");

//dots animation on hover
    $("#link1").hover(function() {
      $(".dots1").fadeIn()
    }, function() {
      $(".dots1").hide()
    });

    $("#link2").hover(function() {
      $(".dots2").fadeIn()
    }, function() {
      $(".dots2").hide()
    });

    $("#link3").hover(function() {
      $(".dots3").fadeIn()
    }, function() {
      $(".dots3").hide()
    });

    $("#link4").hover(function() {
      $(".dots4").fadeIn()
    }, function() {
      $(".dots4").hide()
    });

    $("#link5").hover(function() {
      $(".dots5").fadeIn()
    }, function() {
      $(".dots5").hide()
    });

// toggle language box
    $("#show-lang-box, .nav-triangle").click(function() {
      $(".lang-box-wrapper").toggle()
    });

// toggle pages section4
    $("#1, .previous").click(function() {
      $("#1").addClass("active");
      $("#2").removeClass("active");
      $("#page2").hide();
      $("#page1").fadeIn(300)
    })

    $("#2, .next").click(function() {
      $("#2").addClass("active");
      $("#1").removeClass("active");
      $("#page1").hide();
      $("#page2").fadeIn(300)
    })

// hamburger icon
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      if ($hamburger.hasClass("is-active")) {
         $("#mobile-menu").fadeIn(300)
       } else {
         $("#mobile-menu").fadeOut(300)
       }
    });
});
