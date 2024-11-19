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

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.toString()); // Ausgabe der gesamten Parameter
const utmSource = urlParams.get('utm_source');


// Beispiel: Reagiere basierend auf dem UTM-Parameter
if (utmSource === 'github') {
  // Aktion für den Zugriff über GitHub
  console.log("Besucher kam über GitHub.");
  // Füge hier die spezielle Logik für GitHub hinzu
} else if (utmSource === 'linkedin') {
  // Aktion für den Zugriff über LinkedIn
  console.log("Besucher kam über LinkedIn.");
  // Füge hier die spezielle Logik für LinkedIn hinzu
} else if (utmSource === 'direct') {
  // Aktion für den Direkt-Link
  console.log("Besucher kam über einen Direkt-Link.");
  // Füge hier die spezielle Logik für Direkt-Link hinzu
} else if (utmSource === 'qr-code') {
  // Aktion für den Zugriff über den QR-Code von der Visitenkarte
  console.log("Besucher kam über den QR-Code.");
  // Füge hier die spezielle Logik für den QR-Code hinzu
} else {
  // Standardaktion, wenn keine UTM-Parameter gefunden wurden
  console.log("Besucherquelle unbekannt.");
  // Füge hier die Logik für unbekannte Quellen hinzu
}
