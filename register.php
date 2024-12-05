<?php
include 'database.php'; // Verbindung zur Datenbank

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Eingaben aus dem Formular abrufen
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $password_repeat = $_POST['password_repeat'];

    // Eingabevalidierung
    if (empty($username) || empty($email) || empty($password) || empty($password_repeat)) {
        die("Bitte füllen Sie alle Felder aus.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Ungültige E-Mail-Adresse.");
    }

    if ($password !== $password_repeat) {
        die("Passwörter stimmen nicht überein.");
    }

    // Passwort verschlüsseln
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Benutzer in die Datenbank einfügen
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Fehler bei der Vorbereitung des Statements: " . $conn->error);
    }

    $stmt->bind_param("sss", $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Account erfolgreich erstellt!";
    } else {
        echo "Fehler bei der Erstellung des Accounts: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Ungültige Anforderung.";
}
?>
