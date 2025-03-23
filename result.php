<?php
    $db = new pdo("mysql:host=localhost;dbname=isoc", "admin", "1234");
    echo json_encode($db->query("SELECT `id`, `fristName`, `last_name`, `phone`, `password` FROM `tickes`")->fetchAll())
?>