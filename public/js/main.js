$( document ).ready(function() {
    $( ".hover-proyecto" ).mouseover(function() {
      $( ".proyecto-seleccionado img" ).attr("src","/images/proyect/"+$(this).data("image"));
    });
    $(".pagination li").click(function(){
      $(".project-active").removeClass("project-active")
      if($(this).data("page")=="2"){
        $(".project-container-1").addClass("go-left"); 
        $(".project-container-2").removeClass("go-right"); 
      } else {
        $(".project-container-2").addClass("go-right"); 
        $(".project-container-1").removeClass("go-left"); 
      }
      $(".project-container-"+$(this).data("page")).addClass("project-active")
      $(".bi-record-fill").removeClass("bi-record-fill").addClass("bi-record")
      $(this).find(".bi").removeClass("bi-record").addClass("bi-record-fill")
    })
    $(".main-section .title").click(function(){
      $(this).siblings(".toHide").toggleClass("hidden-section")
    })
});