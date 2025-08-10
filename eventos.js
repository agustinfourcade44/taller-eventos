const div = document.getElementById("contenedor");

div.style.padding = "5 px";
div.style.backgroundColor= "green";

div.addEventListener("click", function(event) {
  if (event.target === this) {
    alert("Hola! Soy el div");
  }
});