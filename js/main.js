const preguntas = [

{
    pregunta: "¿Qué países son sede del Mundial 2026?",
    opciones: [
        {
            texto: "Argentina, Brasil y Uruguay",
            imagen: "./Img/pregunta1/opcion-a.webp"
        },
        {
            texto: "México, Estados Unidos y Canadá",
            imagen: "./Img/pregunta1/opcion-b.webp"
        },
        {
            texto: "España, Francia e Italia",
            imagen: "./Img/pregunta1/opcion-c.webp"
        },
        {
            texto: "Chile, Perú y Bolivia",
            imagen: "./Img/pregunta1/opcion-d.webp"
        }
    ],
    correcta: 1
},

    {
        pregunta: "¿Qué hoja representa a Canadá?",
        opciones: [
        {
            texto: "Hoja de Pino",
            imagen: "./Img/pregunta2/opcion-a.webp"
        },
        {
            texto: "Hoja de Roble",
            imagen: "./Img/pregunta2/opcion-b.webp"
        },
        {
            texto: "Hoja de Olivo",
            imagen: "./Img/pregunta2/opcion-c.webp"
        },
        {
            texto: "Hoja de Arce",
            imagen: "./Img/pregunta2/opcion-d.webp"
        },
        ],
        correcta: 3
    },

    {
    pregunta: "¿Cuál es la bandera de Canadá?",
    opciones: [
        {
            texto: "Bandera de Canadá",
            imagen: "./Img/pregunta3/opcion-a.webp"
        },
        {
            texto: "Bandera de Estados Unidos",
            imagen: "./Img/pregunta3/opcion-b.webp"
        },
        {
            texto: "Bandera de México",
            imagen: "./Img/pregunta3/opcion-c.webp"
        },
        {
            texto: "Bandera de Japón",
            imagen: "./Img/pregunta3/opcion-d.webp"
        }
        ],
        correcta: 0
    },

   {
    pregunta: "¿Cuántas mascotas representan a los países anfitriones del Mundial 2026?",
    opciones: [
        {
            texto: "1 mascota",
            imagen: "./Img/pregunta4/opcion-a.webp"
        },
        {
            texto: "2 mascotas",
            imagen: "./Img/pregunta4/opcion-b.webp"
        },
        {
            texto: "3 mascotas",
            imagen: "./Img/pregunta4/opcion-c.webp"
        },
        {
            texto: "4 mascotas",
            imagen: "./Img/pregunta4/opcion-d.webp"
        }
    ],
    correcta: 2
},

    {
    pregunta: "¿Qué animales representan a los tres países anfitriones?",
    opciones: [
        {
            texto: "León, Tigre y Oso",
            imagen: "./Img/pregunta5/opcion-a.webp"
        },
        {
            texto: "Alce, Jaguar y Águila",
            imagen: "./Img/pregunta5/opcion-b.webp"
        },
        {
            texto: "Panda, Koala y Canguro",
            imagen: "./Img/pregunta5/opcion-c.webp"
        },
        {
            texto: "Lobo, Zorro y Conejo",
            imagen: "./Img/pregunta5/opcion-d.webp"
        }
    ],
    correcta: 1
},
{
    pregunta: "¿Qué mascota representa a Estados Unidos?",
    opciones: [
        {
            texto: "Águila",
            imagen: "./Img/pregunta6/opcion-a.webp"
        },
        {
            texto: "Alce",
            imagen: "./Img/pregunta6/opcion-b.webp"
        },
        {
            texto: "Jaguar",
            imagen: "./Img/pregunta6/opcion-c.webp"
        },
        {
            texto: "Lobo",
            imagen: "./Img/pregunta6/opcion-d.webp"
        }
    ],
    correcta: 0
},

{
    pregunta: "¿Qué mascota representa a Canadá?",
    opciones: [
        {
            texto: "Jaguar",
            imagen: "./Img/pregunta7/opcion-a.webp"
        },
        {
            texto: "Águila",
            imagen: "./Img/pregunta7/opcion-b.webp"
        },
        {
            texto: "Alce",
            imagen: "./Img/pregunta7/opcion-c.webp"
        },
        {
            texto: "Mapache",
            imagen: "./Img/pregunta7/opcion-d.webp"
        }
    ],
    correcta: 2
},

{
    pregunta: "¿Qué mascota representa a México?",
    opciones: [
        {
            texto: "Águila",
            imagen: "./Img/pregunta8/opcion-a.webp"
        },
        {
            texto: "Alce",
            imagen: "./Img/pregunta8/opcion-b.webp"
        },
        {
            texto: "Mapache",
            imagen: "./Img/pregunta8/opcion-c.webp"
        },
        {
            texto: "Jaguar",
            imagen: "./Img/pregunta8/opcion-d.webp"
        }
    ],
    correcta: 3
},

  {
    pregunta: "¿Cuál es el mapa de México?",
    opciones: [
        {
            texto: "Argentina",
            imagen: "./Img/pregunta9/opcion-a.webp"
        },
        {
            texto: "México",
            imagen: "./Img/pregunta9/opcion-b.webp"
        },
        {
            texto: "España",
            imagen: "./Img/pregunta9/opcion-c.webp"
        },
        {
            texto: "Brasil",
            imagen: "./Img/pregunta9/opcion-d.webp"
        }
    ],
    correcta: 1
},

  {
    pregunta: "¿Qué representa el Mundial?",
    opciones: [
        {
            texto: "Solo fútbol",
            imagen: "./Img/pregunta10/opcion-a.webp"
        },
        {
            texto: "Solo competencia",
            imagen: "./Img/pregunta10/opcion-b.webp"
        },
        {
            texto: "Solo entretenimiento",
            imagen: "./Img/pregunta10/opcion-c.webp"
        },
        {
            texto: "La unión entre culturas y países",
            imagen: "./Img/pregunta10/opcion-d.webp"
        }
    ],
    correcta: 3
},

];

let preguntaActual = 0;
let respuestaSeleccionada = null;

const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const btnSiguiente = document.getElementById("btn-siguiente");
const avance = document.getElementById("avance");

function cargarPregunta() {
    const actual = preguntas[preguntaActual];

    contador.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    pregunta.textContent = actual.pregunta;
    opciones.innerHTML = "";
    mensaje.textContent = "";
    respuestaSeleccionada = null;

    avance.style.width = `${((preguntaActual + 1) / preguntas.length) * 100}%`;

    actual.opciones.forEach((opcion, index) => {
    const boton = document.createElement("button");

    boton.classList.add("opcion");

   if (typeof opcion === "object") {
    boton.innerHTML = `
        <img src="${opcion.imagen}" alt="${opcion.texto}" loading="lazy">
        <span>${opcion.texto}</span>
    `;
    }
     else {
        boton.textContent = opcion;
    }

    boton.addEventListener("click", () => {
        document.querySelectorAll(".opcion").forEach(btn => {
            btn.classList.remove("seleccionada");
        });

        boton.classList.add("seleccionada");
        respuestaSeleccionada = index;
    });

    opciones.appendChild(boton);
});
}

btnSiguiente.addEventListener("click", () => {
    if (respuestaSeleccionada === null) {
        mensaje.textContent = "Seleccioná una respuesta.";
        return;
    }

    if (respuestaSeleccionada === preguntas[preguntaActual].correcta) {
        mensaje.textContent = "✅ ¡Correcto!";

        setTimeout(() => {
            preguntaActual++;

            if (preguntaActual < preguntas.length) {
                cargarPregunta();
            } else {
                window.location.href = "final.html";
            }
        }, 900);

    } else {
        mensaje.textContent = "❌ Incorrecto. Intentá nuevamente.";
    }
});

cargarPregunta();