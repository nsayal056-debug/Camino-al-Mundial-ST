const preguntas = [

{
    pregunta: "¿Qué países son sede del Mundial 2026?",
    opciones: [
        {
            texto: "Argentina, Brasil y Uruguay",
            imagen: "./img/pregunta1/opcion-a.png"
        },
        {
            texto: "México, Estados Unidos y Canadá",
            imagen: "./img/pregunta1/opcion-b.png"
        },
        {
            texto: "España, Francia e Italia",
            imagen: "./img/pregunta1/opcion-c.png"
        },
        {
            texto: "Chile, Perú y Bolivia",
            imagen: "./img/pregunta1/opcion-d.png"
        }
    ],
    correcta: 1
},

    {
        pregunta: "¿Qué hoja representa a Canadá?",
        opciones: [
            "Hoja de pino",
            "Hoja de roble",
            "Hoja de olivo",
            "Hoja de arce"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Cuál es la bandera de Canadá?",
        opciones: [
            "Bandera de Canadá",
            "Bandera de Estados Unidos",
            "Bandera de México",
            "Bandera de Brasil"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántas mascotas representan a los países anfitriones del Mundial 2026?",
        opciones: [
            "1 mascota",
            "2 mascotas",
            "3 mascotas",
            "4 mascotas"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué animales representan a los tres países anfitriones?",
        opciones: [
            "León, Tigre y Oso",
            "Alce, Jaguar y Águila",
            "Panda, Koala y Canguro",
            "Lobo, Zorro y Conejo"
        ],
        correcta: 1
    },
{
    pregunta: "¿Qué mascota representa a Estados Unidos?",
    opciones: [
        "Águila calva",
        "Alce",
        "Jaguar",
        "Lobo"
    ],
    correcta: 0
},

{
    pregunta: "¿Qué mascota representa a Canadá?",
    opciones: [
        "Jaguar",
        "Águila calva",
        "Alce",
        "Mapache"
    ],
    correcta: 2
},

{
    pregunta: "¿Qué mascota representa a México?",
    opciones: [
        "Lobo",
        "Alce",
        "Águila calva",
        "Jaguar"
    ],
    correcta: 3
},

    {
        pregunta: "¿Cuál es el mapa de México?",
        opciones: [
            "Mapa de Argentina",
            "Mapa de México",
            "Mapa de España",
            "Mapa de Brasil"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué representa el Mundial?",
        opciones: [
            "Solo fútbol",
            "Solo competencia",
            "Solo entretenimiento",
            "La unión entre culturas y países"
        ],
        correcta: 3
    }

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
            <img src="${opcion.imagen}" alt="${opcion.texto}">
            <span>${opcion.texto}</span>
        `;
    } else {
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