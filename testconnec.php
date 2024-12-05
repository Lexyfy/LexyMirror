<?php
$servername = "sql209.infinityfree.com";
$username = "if0_37755170";
$password = "PW8FaVM9n1pPOI";
$dbname = "if0_37755170_users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}
echo "Verbindung zur Datenbank erfolgreich!";
$conn->close();
?>
