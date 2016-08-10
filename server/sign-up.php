<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json');
include ("connection.php");

mysqli_set_charset($conn, "utf8");


$json = file_get_contents('php://input');

$newUser = json_decode($json, true);

$username = trim(mysqli_real_escape_string($conn, $newUser['username']));
$email = trim(mysqli_real_escape_string($conn, $newUser['email']));
$password = trim(mysqli_real_escape_string($conn, $newUser['password']));


$result_username = $conn->prepare("SELECT username FROM signUp WHERE username = ?");

$result_username->bind_param('s', $username);

$result_username->execute();

$result_username->store_result();

$numrows_username = $result_username->num_rows;


$result_email = $conn->prepare("SELECT email FROM signUp WHERE email = ?");

$result_email->bind_param('s', $email);

$result_email->execute();

$result_email->store_result();

$numrows_email = $result_email->num_rows;

if(!empty($username) && !empty($email) && !empty($password)) {
	if($numrows_username === 0) {
		if($numrows_email === 0) {
			$insert_result = mysqli_query($conn, ("INSERT INTO signUp (username, email, password) VALUES ('$username','$email','$password')"));
			if($insert_result) {
				
				header('HTTP/1.0 200 OK');

			}else {
				
				header('HTTP/1.1 409 Conflict');
			}
		}else {
		
		header('HTTP/1.1 409 Conflict');
		}
	}else {
		
		header('HTTP/1.1 409 Conflict');
	}
}else {
	
	header('HTTP/1.0 400 Bad request');
}


$conn->close(); 
?>