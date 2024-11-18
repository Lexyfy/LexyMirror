let change = 0; // Variable außerhalb der Funktion definieren

function StyleNight() {
  // Hole das Link-Element, das dein CSS-Dokument einbindet
  var link = document.querySelector("link[href='style.css'], link[href='Cyber.css']");

  // Überprüfe den aktuellen Zustand und schalte hin und her
  if (change === 0) {
    link.href = "Cyber.css";
    change = 1;
  } else {
    link.href = "style.css";
    change = 0;
  }
}

let bChange = 0;
function xMen() {
  // Hole das Link-Element, das dein CSS-Dokument einbindet
  var link = document.querySelector("link[href='style.css'], link[href='xMen.css']");

  // Überprüfe den aktuellen Zustand und schalte hin und her
  if (bChange === 0) {
    link.href = "xMen.css";
    bChange = 1;
  } else {
    link.href = "style.css";
    bChange = 0;
  }
}