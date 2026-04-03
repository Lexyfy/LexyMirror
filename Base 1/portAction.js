let isCyberStyle = false;
let isAccessibilityStyle = false;

/**
 * Wechselt zwischen dem Standard- und Cyber-Stylesheet.
 */
function toggleCyberStyle() {
  const link = document.querySelector("link[href*='style.css'], link[href*='Cyber.css']");
  if (!link) return;

  link.href = isCyberStyle ? "style.css" : "Cyber.css";
  isCyberStyle = !isCyberStyle;
}

/**
 * Wechselt zwischen dem Standard- und Barrierefrei-Stylesheet.
 */
function toggleAccessibility() {
  const link = document.querySelector("link[href*='style.css'], link[href*='xMen.css']");
  if (!link) return;

  link.href = isAccessibilityStyle ? "style.css" : "xMen.css";
  isAccessibilityStyle = !isAccessibilityStyle;
}

/**
 * Gibt einen String mit erstem Großbuchstaben zurück.
 * Wird evtl. später für dynamische Inhalte genutzt.
 */
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Blendet Elemente mit der Klasse 'Baustelle' ein.
 * Wird bei Bedarf manuell aufgerufen.
 */
function showBetaElements() {
  const elements = document.querySelectorAll(".Baustelle");
  if (elements.length > 0) {
    elements.forEach(el => el.style.display = "block");
  } else {
    console.warn("Keine Elemente mit der Klasse 'Baustelle' gefunden.");
  }
}

/**
 * Dynamische Begrüßung auf Basis von utm_source-Parametern.
 */
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const callUp = document.getElementById("welcome-visual");

  if (!callUp) {
    console.error("Das Begrüßungselement (#welcome-visual) wurde nicht gefunden.");
    return;
  }

  const greetings = {
    github: "Hey, willkommen! Cool, dass du über GitHub vorbeischaust. Hier findest du Infos zu meinen Projekten und ein bisschen was über mich. Wenn du Lust auf einen Austausch hast, meld dich einfach!",
    linkedin: "Herzlich willkommen! Schön, dass Sie über mein LinkedIn-Profil den Weg hierher gefunden haben. Diese Seite gibt Ihnen einen Einblick in meine Projekte und Fähigkeiten. Ich freue mich auf die Möglichkeit, mit Ihnen in Kontakt zu treten.",
    direct: "Willkommen, Sie wurden von Lex direkt eingeladen sich hier umzusehen. Schön, Sie hier begrüßen zu dürfen.",
    "qr-code": "Willkommen! Es freut mich besonders, Sie hier begrüßen zu dürfen schließlich sind wir uns bereits persönlich begegnet. Wenn Sie Fragen oder Anregungen haben, zögern Sie nicht, mich direkt zu kontaktieren falls wir bissher noch keine Kontaktdaten ausgetauscht haben.",
    datenschutz: "Willkommen zurück von der Datenschutzerklärung. Ich hoffe, alles ist zu Ihrer Zufriedenheit. Bei Fragen oder Unklarheiten stehe ich gerne zur Verfügung.",
    default: "Willkommen, Sie haben mein Portfolio über einen mir unbekannten Link geöffnet. Trotzdem schön, Sie hier begrüßen zu dürfen. Schauen Sie sich gerne um hier finden Sie allerlei über mich und meine Kenntnisse."
  };

  callUp.innerHTML = greetings[utmSource] || greetings.default;
};
