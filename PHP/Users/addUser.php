<?php 
require '../server.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->userName)
	&& isset($data->userEmail)
    && isset($data->userPass) 
	&& !empty(trim($data->userName))
	&& !empty(trim($data->userEmail))
    && !empty(trim($data->userPass))
	){
		
	$userName = mysqli_real_escape_string($db_conn, trim($data->userName));
	$userEmail = mysqli_real_escape_string($db_conn, trim($data->userEmail));
    $userPass = mysqli_real_escape_string($db_conn, trim($data->userPass));


	$add = mysqli_query($db_conn,"insert into users (userName,userEmail,userPass) values('$userName','$userEmail','$userPass')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?> 