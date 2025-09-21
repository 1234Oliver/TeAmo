// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Georgia, wrap me up in all your...", time: 9.5 },
  { text: "I want ya, in my arms...", time: 15.5 },
  { text: "Oh, let me hold ya", time: 21 },
  { text: "I'll never let you go again, like I did...", time: 26 },
  { text: "Oh, I used to say...", time: 32.4 },
  { text: "I would never fall in love again until I found her", time: 34.4 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 40.5 },
  { text: "I was lost within the darkness, but then I found her", time: 51 },
  { text: "I found you", time: 56 },

  { text: "Georgia, pulled me in, I asked to...", time: 67 },
  { text: "Love her, once again you fell, I caught ya", time: 74 },
  { text: "I'll never let you go again, like I did...", time: 81 },
  { text: "Oh, I used to say...", time: 78.6 },
  { text: "I would never fall in love again until I found her", time: 87 },
  { text: "I said, I would never fall, unless it's you I fall into", time: 95 },
  { text: "I was lost within the darkness, but then I found her", time: 102 },
  { text: "I found you", time: 108 }
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);