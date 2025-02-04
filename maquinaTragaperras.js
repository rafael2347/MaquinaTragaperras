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

            let premio = 0;

            // Premios para combinaciones exactas de 3 frutas iguales
            if (frutas.join('') === "🍒🍒🍒") {
                premio = 30;
            } else if (frutas.join('') === "7️⃣7️⃣7️⃣") {
                premio = 50;
            } else if (["🍋🍋🍋", "🍊🍊🍊", "🍉🍉🍉", "🍇🍇🍇"].includes(frutas.join(''))) {
                premio = 10;
            } else {
                // Comprobamos si hay dos frutas iguales en cualquier posición
                const premiosPares = {
                    "🍒": 5,
                    "🍋": 5,
                    "🍊": 5
                };

                let conteo = {};
                frutas.forEach(f => conteo[f] = (conteo[f] || 0) + 1);

                for (let fruta in conteo) {
                    if (conteo[fruta] === 2 && premiosPares[fruta]) {
                        premio += premiosPares[fruta];
                    }
                }
            }

            // Si hay premio, lo suma y lo muestra
            if (premio > 0) {
                console.log("entro");
                dinero2 += premio;
                dinero.innerText = `Has ganado ${premio}€! Dinero: ${dinero2}€`;
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
