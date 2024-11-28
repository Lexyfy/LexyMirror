<?php
include 'database.php'; // Verbindung zur Datenbank herstellen

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_repeat = $_POST['password_repeat'];

    // Passwort-Wiederholung prüfen
    if ($password !== $password_repeat) {
        die("Passwörter stimmen nicht überein!");
    }

    // Passwort verschlüsseln
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // SQL-Befehl zum Einfügen eines neuen Benutzers
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Account erfolgreich erstellt!";
    } else {
        echo "Fehler bei der Erstellung des Accounts: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
