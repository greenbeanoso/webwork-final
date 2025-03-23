<?php
    $db = new pdo("mysql:host=localhost;dbname=isoc", "admin", "1234");
    $fristName = $_GET["fristName"];
    $lastName = $_GET["lastName"];
    $phone = $_GET["phone"];
    $password = $_GET["password"];
    $db->query("INSERT INTO `tickes`(`fristName`, `last_name`, `phone`, `password`) VALUES ('$fristName', '$lastName', '$phone', '$password')");
?>