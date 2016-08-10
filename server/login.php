 <?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json');
include ("connection.php");

mysqli_set_charset($conn, "utf8");


$json = file_get_contents('php://input');

$userLogin = json_decode($json, true);


$username = trim(mysqli_real_escape_string($conn, $userLogin['username']));
$password = trim(mysqli_real_escape_string($conn, $userLogin['password']));


$stmt = $conn->stmt_init();

$sql = "SELECT * FROM signUp WHERE username = ? AND password = ?";

$stmt->prepare($sql);

$stmt->bind_param('ss', $username, $password);

$stmt->execute();

$stmt->store_result();

$numrows = $stmt->num_rows;


if ($numrows !== 1) {
	header('HTTP/1.0 401 Unauthorized');
} else {
	header('HTTP/1.0 200 OK');
	$_SESSION["username"] = $username;
	session_write_close();
}


$conn->close(); 

?>