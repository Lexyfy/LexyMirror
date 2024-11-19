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

function kleinGroß(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.toString()); // Ausgabe der gesamten Parameter
  const utmSource = urlParams.get('utm_source');

  // Anpassung der Seite anhand der URL/UTM
  const callUp = document.getElementById("Bifrost");
  if (callUp) { // Überprüfe, ob das Element existiert
    if (utmSource === 'github') {
      callUp.innerHTML = "Willkommen, Sie haben die Seite über " + kleinGroß(utmSource) + " betreten";
      console.log("Besucher kam über GitHub.");
    } else if (utmSource === 'linkedin') {
      callUp.innerHTML = "Willkommen, Sie haben die Seite über " + kleinGroß(utmSource) + " betreten";
      console.log("Besucher kam über LinkedIn.");
    } else if (utmSource === 'direct') {
      callUp.innerHTML = "Willkommen, Sie wurden von Lex direkt eingeladen. <br> Schön Sie hier begrüßen zu dürfen.";
      console.log("Besucher kam über einen Direkt-Link.");
    } else if (utmSource === 'qr-code') {
      callUp.innerHTML = "Willkommen, Sie haben die Seite über " + kleinGroß(utmSource) + " betreten";
      console.log("Besucher kam über den QR-Code.");
    } else {
      callUp.innerHTML = "Willkommen, Sie haben die Seite über ??? betreten";
      console.log("Besucherquelle unbekannt.");
    }
  } else {
    console.error("Das Element mit der ID 'Bifrost' wurde nicht gefunden.");
  }
};


