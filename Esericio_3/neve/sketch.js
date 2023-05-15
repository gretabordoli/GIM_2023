// Creazione del fiocco di neve

function setup(){
	createCanvas(windowWidth, windowHeight)
	background(54, 69, 79)
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.innerHTML = "&#10052;"; // Utilizzo di un carattere Unicode per rappresentare il fiocco di neve
  snowflake.style.position = "absolute";
  snowflake.style.top = "-10px";
  snowflake.style.fontSize = Math.random() * 10 + "px"; // Dimensione casuale del fiocco di neve
  snowflake.style.color = "#ffffff"; // Colore bianco
  snowflake.style.userSelect = "none"; // Evitare la selezione del fiocco di neve con il cursore
  return snowflake;
}

// Animazione della neve
function animateSnowflake(snowflake) {
  const start = Math.random() * window.innerWidth; // Posizione iniziale casuale
  const end = Math.random() * window.innerWidth; // Posizione finale casuale
  const duration = Math.random() * 10 + 5; // Durata casuale dell'animazione

  snowflake.style.left = start + "px";

  snowflake.animate(
    { transform: `translate(${end - start}px, ${window.innerHeight}px)` },
    {
      duration: duration * 1000,
      easing: "linear",
      fill: "both",
      iterations: Infinity,
      iterationStart: Math.random(), // Inizio casuale dell'animazione per evitare sincronizzazione
    }
  );
}

// Creazione e avvio degli effetti neve
function startSnowfall() {
  const snowfallContainer = document.createElement("div");
  snowfallContainer.style.position = "fixed";
  snowfallContainer.style.top = "0";
  snowfallContainer.style.left = "0";
  snowfallContainer.style.width = "100%";
  snowfallContainer.style.height = "100%";
  snowfallContainer.style.pointerEvents = "none"; // Permettere agli elementi sottostanti di essere interattivi

  document.body.appendChild(snowfallContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = createSnowflake();
    snowfallContainer.appendChild(snowflake);
    animateSnowflake(snowflake);
  }
}

// Avvio dell'effetto neve
startSnowfall();
