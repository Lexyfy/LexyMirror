document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars

  const form = event.target;
  const formData = new FormData(form);

  try {
      // Sende die Anfrage an Formspree
      const response = await fetch('https://formspree.io/f/xdkozeaa', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
          // Zeige eine Erfolgsnachricht an
          document.getElementById('form-message').style.display = 'block';
          form.reset(); // Setzt das Formular zurück
      } else {
          // Zeige eine Fehlermeldung an, wenn etwas schiefgeht
          alert('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später noch einmal.');
      }
  } catch (error) {
      // Zeige eine Fehlermeldung an, wenn ein Fehler auftritt
      alert('Es gab einen Fehler beim Senden deiner Nachricht. Bitte überprüfe deine Internetverbindung.');
  }
});