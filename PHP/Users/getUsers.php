<?php
require '../server.php';
$allUsers = mysqli_query($db_conn,"SELECT * FROM users_test");
if(mysqli_num_rows($allUsers) > 0){
    while($row = mysqli_fetch_array($allUsers)){
        $viewjson["id"] = $row['id'];
        $viewjson["userName"] = $row['userName'];
        $viewjson["uesrEmail"] = $row['uesrEmail'];
        $viewjson["userPass"] = $row['userPass'];
        $viewjson["hashedPass"] = $row['hashedPass'];
        $json_array[] = $viewjson;
    }
    echo json_encode($json_array);
    return;
}
else{
    echo json_encode(["success"=>false]);
    return;
}
?> 