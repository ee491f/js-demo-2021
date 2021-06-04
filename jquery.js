$( document ).ready(function() {
  console.log("ready");
  $( "button" ).on( "click", function() {
    $("p").toggleClass("alert");
    //$("p").toggle("slow");
  });
});