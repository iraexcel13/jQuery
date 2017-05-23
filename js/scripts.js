$("document").ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideToggle();
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("white-text");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("body").addClass("black-text");
  });

  $(".highlight").click(function() {
    $(".highlight").addClass("highlight-paragraph");
    $(".highlight").addClass("box");
  });
});
