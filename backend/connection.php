<?php 

try {
    $conn = new PDO("mysql:host=localhost;dbname=users", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connection succcesful";
} catch (PDOException $error) {
    die("Connect Failed : " . $error);
}

?>