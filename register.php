<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Werte aus dem Formular lesen
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $password_repeat = isset($_POST['password_repeat']) ? $_POST['password_repeat'] : '';

    // Hier geben wir die Werte einfach direkt aus
    echo "<h2>Eingegangene Daten:</h2>";
    echo "<p>Benutzername: $username</p>";
    echo "<p>E-Mail: $email</p>";

    if ($password === $password_repeat) {
        echo "<p>Passwörter stimmen überein.</p>";
    } else {
        echo "<p>Passwörter stimmen nicht überein.</p>";
    }
} else {
    echo "Kein POST-Request erhalten.";
}
