<?php

// Initiate connection
include_once "./connection.php";
$gather_users = $conn->prepare("SELECT * FROM users");
$gather_users->execute();
$users = $gather_users->fetchAll(PDO::FETCH_OBJ);
$users_count = $gather_users->rowCount();
$has_users = $users_count > 0;

$has_users ? var_dump($users) :  throw new Error("No users found");
