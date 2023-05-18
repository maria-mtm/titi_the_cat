
const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn") //querySelectorAll crea un array

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.textContent)
        const pressedBtn = btn.textContent; //guardamos en esta variable el contenido de el boton


        if (btn.id === "c") {
            display.textContent = "0";
            return; //el return solo termina la funcion. No se ejecuta todo lo que sigue
        }

        if (btn.id === "delete") {

            if (display.textContent.length === 1 || display.textContent === "Titi says sth is wrong") {
                display.textContent = "0"
            } else {
                display.textContent = display.textContent.slice(0, -1); //slice posicion 0, eliminar el numero anterior a esa posicio
            }
            return; //para que no salga la flecha
        }


        if (btn.id === "equal") {

            try {
                display.textContent = eval(display.textContent) //este metodo evalua las operaciones matematicas en los string que recoger

            } catch {
                display.textContent = "Titi says sth is wrong"
            }
            return;

        }





        //le pasamos el contenido del btn a la pantalla
        if (display.textContent === "0" || display.textContent === "Titi says sth is wrong") {
            display.textContent = pressedBtn;//si el contenido es 0, se reemplaza por el numero que apretemos despues
        } else {
            display.textContent += pressedBtn; //si no es 0, se van añadiendo numeros
        }
    })
})