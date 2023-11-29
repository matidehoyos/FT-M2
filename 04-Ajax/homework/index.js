var botonVer = document.getElementById("boton");
var lista = document.getElementById("lista");


function crearLista(){
    lista.innerHTML = "";
    $.get("http://localhost:5000/amigos", (res) => {
        res.forEach(element =>{
            let li = document.createElement("li");
            li.innerHTML = element.name;
            lista.appendChild(li);
        });
    });
} 

botonVer.addEventListener("click", crearLista);


var input = document.getElementById("input");
var search = document.getElementById("search");
var span = document.getElementById("amigo");

function buscarAmigo() {
    $.get("http://localhost:5000/amigos/"+input.value , (res) => {
        span.innerHTML = res.name;
    });
}

search.addEventListener("click", buscarAmigo);



var inputDelete = document.getElementById("inputDelete");
var botonDelete = document.getElementById("delete");
var exito = document.getElementById("success");

function eliminar(){
    $.ajax({
        url : "http://localhost:5000/amigos/"+ inputDelete.value,
        method : "DELETE",
        dataType : "json",
        success : function(res){
            exito.innerHTML = "Amigo eliminado exitosamente";
        },
        error : function (xhr, status, error){
            console.log(error);
        },
});
}

botonDelete.addEventListener("click", eliminar);
