let change = 0; // Variable zum Style-change
let benutzter;
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
//Zwischenlösung zur dynamischen Begrüßung vlt später noch zu gebrauchen
function kleinGroß(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function usersystem(){
  function usersystem() {
    const elements = document.querySelectorAll(".Baustelle");
    if (elements.length > 0) {
      elements.forEach(element => {
        element.style.display = "block";
      });
    } else {
      console.error("Keine Elemente mit der Klasse 'Baustelle' gefunden.");
    }
  }
  
}



window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');

  
  // Dynamischer Begrüßungstext 
  //https://lexymirror.netlify.app/?utm_source=direct&utm_medium=personal&utm_campaign=cv_mirror
  const callUp = document.getElementById("Bifrost");
  if (callUp) { 
    if (utmSource === 'github') {
      callUp.innerHTML = "Hey, willkommen! Cool, dass du über GitHub vorbeischaust. Hier findest du Infos zu meinen Projekten und ein bisschen was über mich wenn du Lust auf einen Austausch hast, meld dich einfach!";

    } else if (utmSource === 'linkedin') {
      callUp.innerHTML = "Herzlich willkommen! Schön, dass Sie über mein LinkedIn-Profil den Weg hierher gefunden haben. Diese Seite gibt Ihnen einen Einblick in meine Projekte und Fähigkeiten. Ich freue mich auf die Möglichkeit, mit Ihnen in Kontakt zu treten.";

    } else if (utmSource === 'direct') {
      callUp.innerHTML = "Willkommen, Sie wurden von Lex direkt eingeladen sich hier umzusehen. <br> Schön Sie hier begrüßen zu dürfen."

    } else if (utmSource === 'qr-code') {
      callUp.innerHTML = "Willkommen! Es freut mich besonders, Sie hier zu begrüßen zu dürfen schließlich sind wir uns bereits persönlich begegnet. Wenn Sie Fragen oder Anregungen haben, zögern Sie nicht, mich direkt zu kontaktieren";
      
    }else if(utmSource === 'datenschutz'){
      callUp.innerHTML = "Willkommen zurück von der Datenschutzerklärung, Ich hoffe das alles zu Ihrer Zufriedenheit ist. Falls Ihnen irgendeine ungereimtheit aufgefallen ist oder etwas unklar ist stehe ich gern für Rückfragen zur Verfügung"
    }
     else {
      callUp.innerHTML = "Willkommen, Sie haben mein Portfolio über einen nicht vom mir bekannten Link geöffnet...? Normalerweise wäre hier ein dynamischer Begrüßungstext. Trotzdem schön sie hier begrüßen zu dürfen. Schauen sie sich gerne um, hier finden sie allerlei über mich und meine Kentnisse. Da sie die Seite auf einen weg gefunden haben den ich noch nicht entdeckt habe verrate ich Ihnen ein Geheimniss. <br> Ich liebe es kleine Spielerein in meine Seiten einzubauen, noch sind nicht viele Easter Eggs versteckt aber mit der Zeit werden sich über alle meine Seiten kleine Geschichten entwickeln also immer die Augen offen halten";
      
    }
  } else {
    console.error("Das Element mit der Bifrost wurde nicht gefunden.");
  }
};


