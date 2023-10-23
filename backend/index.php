<?php 
$name = $_GET['name'];
echo $name;

setcookie("cookie", "Cookie-value-name");
echo $_COOKIE['cookie'];

?>
