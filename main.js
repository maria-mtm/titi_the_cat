
// ACORDEON

const bloque=document.querySelectorAll('.bloque')
const h3=document.querySelectorAll('.h3')

// Cuando CLICK en h2,
// QUITAR la clase activo de TODOS los bloques
// Vamos a añadir la clase activo al BLOQUE con la posicion h2

//Recorrer todos los h3
h3.forEach((cadaH3, i) =>{
    //Asignando un click a cada h2
    h3[i].addEventListener('click', ()=>{
        //Recorrer todos los bloques
        bloque.forEach((cadaBloque, i)=>{
            //Quitamos la clase active de TODOS los bloques
            bloque[i].classList.remove('active')
        })
        //Añadiendo la clase activo al bloque cuya posicion des igual al del h3
        bloque[i].classList.add('active')
    })

})


//Para cerrar cada bloque clicando en el contenido 
const contenido= document.querySelectorAll ('.contenido')

contenido.forEach((cadaP, i)=>{
    contenido[i].addEventListener('click', ()=>{

        //Recorrer todos los bloques
        bloque.forEach((cadaBloque, i)=>{
            //Quitamos la clase active de TODOS los bloques
            bloque[i].classList.remove('active')
        })
        
    })
})





//LIGHTBOX

// cuando hacemos CLICK en una imagen etiqueta  .a
     // .lightbox ADD CLASS 'active'
     // .img ATTR "src"
     // .grande COLOCAR el src de .img 

const enlaces = document.querySelectorAll('.ul .a')
// cogemos todas las clases a de las clases ul
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')


const cerrar = document.querySelector('.cerrar')


enlaces.forEach((cadaEnlace,i)=>{ // coada enlace y su posicion (i)

    enlaces[i].addEventListener('click', (e)=>{ // e es el evento que manda el raton cuando utilizamos el metodo .addEventListenr
        e.preventDefault() // con -preventDefault PREVENIMOS el evento (que no ocurra)
        let ruta = cadaEnlace.querySelector('.img').src // seleccionamos el atributo src de la imagen que hay en cada enlace
        console.log(ruta)

        // a .lightbox le añadimos el elemento active
        lightbox.classList.add('active')

        grande.setAttribute('src', ruta)
    })

})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('active') // a lightbox le quitamos el activo (lo que habria toda la pantalla con la foto)
    
    // grande.setAttribute('src', '') // y a la imagen grande le quitamos el atributo src
   
})



// CARROUSEL

const ggrande = document.querySelector('.ggrande')
const punto = document.querySelectorAll('.punto') //All porque son varios puntos

//CUANDO click EN PUNTO
      // Saber la posicion de ese punto
      // Aplicar un transform translateX al grande
      // QUITAR la clase activo de TODOS los puntos
      //AÑADIR la clase activo  al punto que hemos hecho click



punto.forEach((cadaPunto, i)=>{ //Recorrer todos los puntos

    punto[i].addEventListener('click', ()=>{ //Asignamos un CLICK a CADAPUNTO

        let posicion = i; //Guardamos la posicion aqui de ese punto

        // cuando la posicion es 0 trasformX es 0
        //posicion es 1 transform es -50%
        // vamos a hacer una operacion que sera operacion = posicion *-50% (1*-50=-50 y 0*-50=0)
        
        
        let operacion = posicion * -50 //Calculamos el espacio que debe desplazarse el grande

        ggrande.style.transform = `translateX(${operacion}%)` //Movemos el grande



   
        punto.forEach ((cadaPunto, i) =>{     //Recorremos todos los puntos


            punto[i].classList.remove('active') //Quitamos la clase activo a todos los puntos

        })

        punto[i].classList.add('active') //añadimos la clase activo en el punto que hemos hecho click




    })
})












