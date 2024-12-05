<?php
include 'database.php'; // Verbindung zur Datenbank

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $password_repeat = $_POST['password_repeat'];

    if (empty($username) || empty($email) || empty($password) || empty($password_repeat)) {
        die("Bitte füllen Sie alle Felder aus.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Ungültige E-Mail-Adresse.");
    }

    if ($password !== $password_repeat) {
        die("Passwörter stimmen nicht überein.");
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        error_log("Fehler bei der Vorbereitung des Statements: " . $conn->error);
        die("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    }

    $stmt->bind_param("sss", $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Account erfolgreich erstellt!";
    } else {
        error_log("Fehler bei der Ausführung des Statements: " . $stmt->error);
        die("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Ungültige Anforderung.";
}
?>
