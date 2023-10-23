<?php 
include_once("connection.php");

$firstname = "Hussain";
$lastname = "Adekunle";
$email = "codeslunch@outlook.com";
$password = "Javascript.2";
$encrypted = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users(firstname, lastname, email, passkey) VALUES('$firstname', '$lastname', '$email', '$encrypted')";
$stmt = $conn->prepare($sql);
$stmt->execute();

echo "A new value has been sent";


// Logins

// Email One : jhsondada@outlook.com
// Password : incriminating2002
?>