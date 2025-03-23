<?php
    $db = new pdo("mysql:host=localhost;dbname=isoc", "admin", "1234");
    $id = $_GET["id"];
    echo $id;
    $db->query("DELETE FROM `tickes` WHERE `id` = $id ");
?>