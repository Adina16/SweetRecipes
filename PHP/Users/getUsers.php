<?php
require '../server.php';
$allUsers = mysqli_query($db_conn,"SELECT * FROM users");
if(mysqli_num_rows($allUsers) > 0){
    while($row = mysqli_fetch_array($allUsers)){
        $viewjson["id"] = $row['id'];
        $viewjson["userName"] = $row['userName'];
        $viewjson["userEmail"] = $row['userEmail'];
        $viewjson["userPass"] = $row['userPass'];
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