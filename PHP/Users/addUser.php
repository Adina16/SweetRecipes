<?php 
require '../server.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username)
	&& isset($data->email)
    && isset($data->password) 
	&& !empty(trim($data->username))
	&& !empty(trim($data->email))
    && !empty(trim($data->password))
	){
		
	$userName = mysqli_real_escape_string($db_conn, trim($data->username));
	$userEmail = mysqli_real_escape_string($db_conn, trim($data->email));
    $userPass = mysqli_real_escape_string($db_conn, trim($data->password));


	$add = mysqli_query($db_conn,"insert into users (userName,userEmail,userPass) values('$userName','$userEmail','$userPass')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again","data"=>$add]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!", "data"=>$data]);
	return;
}
?> 