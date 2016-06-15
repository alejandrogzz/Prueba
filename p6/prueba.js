
var lista = $("li");
var nlista = parseInt(lista);


$("#agregar").click(function(){
     $("li").add("<li>6</li>").appendTo("ul");
   //  $("nlista").add().next();



    




  });

$("#eliminar").click(function(){
        $("li:first").remove();
    });


