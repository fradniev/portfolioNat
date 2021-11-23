$( document ).ready(function() {
    $( ".hover-proyecto" ).mouseover(function() {
      $( ".proyecto-seleccionado img" ).attr("src","/images/"+$(this).data("image"));
    });
});