<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

    $db_conn = mysqli_connect("localhost", "myuser", "123", "sweetrecipes");
    // Check connection
    if($db_conn === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
    error_reporting(E_ALL);
    ini_set('display_errors','Off');
?>