<?php
require '../server.php';


$data = json_decode(file_get_contents("php://input"));
$userName = mysqli_real_escape_string($db_conn, trim($data->username));
$userPass = mysqli_real_escape_string($db_conn, trim($data->password));

$SQL = "SELECT * FROM users WHERE userName = '$userName'";
$exeSQL = mysqli_query($db_conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

if ($checkName != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['userPass'] != $userPass) {
        echo json_encode(["success"=>false,"msg"=>"Parola este gresita!"]);
    } else {
        echo json_encode(["success"=>true,"msg"=>"$arrayu"]);
    }
} else {
    echo json_encode(["success"=>false,"msg"=>"Username gresit!"]);
}

