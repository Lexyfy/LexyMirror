<?php
$servername = "sql209.infinityfree.com"; // Dein MySQL Hostname
$username = "if0_37755170"; // Dein MySQL Benutzername
$password = "PW8FaVM9n1pPOI"; // Dein MySQL Passwort
$dbname = "if0_37755170_users"; // Dein Datenbankname

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}
?>
