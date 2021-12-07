$( document ).ready(function() {
  var divsOpened=0;
  var proyectos = {
    natour: {
      image1: "images/proyect/d_nat.png",
      image2: "images/proyect/d_nat.png",
      image3: "images/proyect/d_nat.png",
      descripcion: "Bien conocemos el apoyo sustancial que la humanidad ha proporcionado a lo largo de los últimos 10 años al cuidado del medio ambiente y la conservación de especies naturales animales y vegetales cuya existencia está dependiendo en gran porcentaje de la actividad humana.  A lo largo de esta página se mostrarán animales en su hábitat natural pertenecientes a reservas naturales destacables en el mundo actual. Nuestra visión es la de mostrar la belleza de la naturaleza que nos rodea y cómo estos animales pueden subsistir hoy en día gracias al acto de conciencia humano. Aportamos con datos, curiosidades y conocimientos reseñables sobre la importancia de estos refugios y lo que podemos hacer desde nuestras casas para apoyar a la causa. Nuestra interfaz le permite al usuario navegar y conocer a la gran variedad de especies que habitan en estos refugios, pudiendo apreciarlos a la vez que aportan a las reservas naturales con el valor de la suscripción por pago.",
      title: "NaTour360",
      actualizacion: "20/11/21",
      enlace: "https://natour360.com"
    },
    megu: {
      image1: "images/proyect/d_bot.png",
      image2: "images/proyect/d_bot.png",
      image3: "images/proyect/d_bot.png",
      descripcion: "Bienvenido/a a MeguBot, el mejor asistente administrativo que podrás encontrar en la web. MeguBot está diseñado con herramientas de aplicación cotidiana que le permitirán organizar su trabajo, su calendario, sus ideas y gestionar adecuadamente las actividades y responsabilidades que usted tiene a su bien. La interacción modular de MeguBot le ayuda al usuario a ordenar sus actividades del día a día y poder manejar con eficacia y eficiencia la toma de decisiones y los posibles imprevistos que se generan a nivel profesional. Una de las funcionalidades más útiles de este bot es la de que se puede acceder desde cualquier sitio a todo el contenido estratégicamente almacenado en la plataforma; y poder usarlo de forma conveniente en cualquier situación del día. Nuestra página de soporte también le dará ideas sobre cómo mejorar el uso del asistente y además tú también puedes colaborarnos con ideas, inquietudes o posibles errores a corregirse en un futuro; y así retroalimentar positivamente nuestro sistema. MeguBot atiende rápidamente a las necesidades del día a día y se preocupa por lo que los usuarios requieren en el momento en el que lo requieren. Nuestra política es confiar en el usuario para que el usuario confíe en nosotros; así que confiaremos en tus sugerencias, y esperamos que confíes en la capacidad de MeguBot de facilitar tu día a día.",
      title: "Megu BOT",
      actualizacion: "10/04/21",
      enlace: "https://megurobot.github.io"
    },
    vwlearn: {
      image1: "images/proyect/d_vwl.png",
      image2: "images/proyect/d_vwl.png",
      image3: "images/proyect/d_vwl.png",
      descripcion: "La producción de contenido audiovisual dentro de plataformas digitales ya no sólo se ha quedado en las manos de unos pocos «expertos» sino que hoy en día el conocimiento se ha expandido a tal punto de que todos pueden, si lo desean, acceder a las tecnologías adecuadas para generar contenido de gran calidad de forma autónoma y la mayoría de veces sin un estudio avanzado previo del software o del hardware implicados. Conscientes de ello, nuestra empresa desea apoyar a los creadores de contenido con la ingeniería de software y de hardware aplicada al diseño creativo y novedoso de contenido. Nuestro enfoque está en la actualidad del mundo digital y en los años venideros. Además de las nuevas generaciones, también nuestro asesoramiento puede llegar a las generaciones más antiguas que se sienten ahogadas en estas olas continuas de conocimiento y actualización; de forma que sean también partes activas del arte de diseñar.",
      title: "VW Learn",
      actualizacion: "25/06/21",
      enlace: "https://vwlearn.com"
    },
    gata: {
      image1: "images/proyect/d_cat.png",
      image2: "images/proyect/d_cat.png",
      image3: "images/proyect/d_cat.png",
      descripcion: "descripcion",
      title: "La gata flora",
      actualizacion: "06/12/20",
      enlace: "https://lagataflora.com"
    },
    veterinaria: {
      image1: "images/proyect/d_bot.png",
      image2: "images/proyect/d_bot.png",
      image3: "images/proyect/d_bot.png",
      descripcion: "Bienvenido/a a MeguBot, el mejor asistente administrativo que podrás encontrar en la web. MeguBot está diseñado con herramientas de aplicación cotidiana que le permitirán organizar su trabajo, su calendario, sus ideas y gestionar adecuadamente las actividades y responsabilidades que usted tiene a su bien. La interacción modular de MeguBot le ayuda al usuario a ordenar sus actividades del día a día y poder manejar con eficacia y eficiencia la toma de decisiones y los posibles imprevistos que se generan a nivel profesional. Una de las funcionalidades más útiles de este bot es la de que se puede acceder desde cualquier sitio a todo el contenido estratégicamente almacenado en la plataforma; y poder usarlo de forma conveniente en cualquier situación del día. Nuestra página de soporte también le dará ideas sobre cómo mejorar el uso del asistente y además tú también puedes colaborarnos con ideas, inquietudes o posibles errores a corregirse en un futuro; y así retroalimentar positivamente nuestro sistema. MeguBot atiende rápidamente a las necesidades del día a día y se preocupa por lo que los usuarios requieren en el momento en el que lo requieren. Nuestra política es confiar en el usuario para que el usuario confíe en nosotros; así que confiaremos en tus sugerencias, y esperamos que confíes en la capacidad de MeguBot de facilitar tu día a día.",
      title: "Megu BOT",
      actualizacion: "10/04/21",
      enlace: "https://megurobot.github.io"
    }
  }
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
    $(this).toggleClass("activeTitle");
    $(this).parent().find(".toHide").toggleClass("hidden-section")
    if($(this).parent().find(".toHide").hasClass("hidden-section")){
      divsOpened--;
    } else {
      divsOpened++;
    }
    console.log(divsOpened)
    if(divsOpened==6){
      $(".left-side,.right-side").addClass("allOpened");
    } else if($(".left-side,.right-side").hasClass("allOpened")){
      $(".left-side,.right-side").removeClass("allOpened");
    }
  })
  var myModal = new bootstrap.Modal(document.getElementById('main-modal'))
  $(".button-open-modal").click(function(e){
    e.preventDefault();
    $("#imagen1").attr("src", proyectos[$(this).data("name")].image1)
    $("#imagen2").attr("src", proyectos[$(this).data("name")].image2)
    $("#imagen3").attr("src", proyectos[$(this).data("name")].image3)
    $("#descripcion").text(proyectos[$(this).data("name")].descripcion)
    $("#title").text(proyectos[$(this).data("name")].title)
    $("#actualizacion").text(proyectos[$(this).data("name")].actualizacion)
    $("#enlace").text(proyectos[$(this).data("name")].enlace)
    myModal.show();
  })
});