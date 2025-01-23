const tragaperras = ["🍒", "🍋", "🍊", "🍇", "🍉", "7️⃣"];

let dinero2 = 10;

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");
    const slot = document.getElementById("slot");
    const dinero = document.getElementById("dinero");

   
    dinero.innerText = `Dinero: ${dinero2}€`;

    if (boton) {
        boton.addEventListener("click", function () {
            
            dinero2--;
            dinero.innerText = `Dinero: ${dinero2}€`;

            const frutas = [];
            slot.innerText = ''; 

            for (let i = 0; i < 3; i++) {
                const fruta = tragaperras[Math.floor(Math.random() * tragaperras.length)];
                frutas.push(fruta);
            }

            slot.innerText = frutas.join(' ');

       
            if (frutas.join('') === "🍒🍒🍒") {
                dinero2 += 10; // Gana 10€
                dinero.innerText = `Has ganado 10€! Dinero: ${dinero2}€`;
            }

 
            if (dinero2 <= 0) {
                boton.disabled = true;
                dinero.innerText = `Sin dinero. Por favor, recarga para jugar de nuevo.`;
            }
        });
    } else {
        console.error("Elemento con ID 'boton' no encontrado.");
    }
});
