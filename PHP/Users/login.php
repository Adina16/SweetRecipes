<?php
require '../server.php';

$UserName = $decodedData['username'];
$UserPW = ($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE userName = '$UserName'";
$exeSQL = mysqli_query($conn, $SQL);
$checkName =  mysqli_num_rows($exeSQL);

if ($checkName != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['userPass'] != $UserPW) {
        $Message = "pw WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);