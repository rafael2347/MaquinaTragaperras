
const tragaperras = ["🍒", "🍋", "🍊", "🍇", "🍉", "7️⃣"];
  
var boton = document.getElementById("boton");

var slot = document.getElementById("slot");

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("boton");

    if (boton) {
        boton.addEventListener("click", function() {
            var frutas = [];
            for (var i = 0; i < 3; i++) {
                frutas.push(tragaperras[Math.floor(Math.random() * tragaperras.length)]);
            }
            //console.log(frutas);
            document.getElementById("slot").textContent = frutas;
        });
    } else {
        console.error("Element with ID 'boton' not found.");
    }
});