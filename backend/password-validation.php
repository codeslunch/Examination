<?php 

include_once "./connection.php";
$receivedJson = file_get_contents('php://input');
$Object = json_decode($receivedJson);
$email = $Object->email;
$password = $Object->password;


$run = "SELECT * from users WHERE email = '$email'";
$runCode = $conn->prepare($run);
$runCode->execute();
$count = $runCode->rowCount();
$account = $runCode->fetch(PDO::FETCH_OBJ);
$hashedPassword = $account->passkey;
$accountExists = $count > 0;

if($accountExists) {
    if(password_verify($password, $hashedPassword)) {
        echo "Login Succesful";
    } else {
        echo "Incorrect Email address or password";
    }
} else {
    echo "You don't have an account. You can sign up using this link";
}



?>