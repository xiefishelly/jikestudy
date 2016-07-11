<?php
require "sql.php";
$loginId = $_POST['loginId'];
$pwd = $_POST['password'];

$loginId  = mysqli_real_escape_string($con, $loginId);
$pwd = mysqli_real_escape_string($con, $pwd);
$sql = "SELECT * FROM user WHERE loginid='$loginId' AND password='$pwd'";
$res = mysqli_query($con, $sql);
$nums = mysqli_num_rows($res);
mysqli_close($con);
if($nums == 1){
    session_start();
    $_SESSION['user'] = $loginId;
    header("Location:nb_index.html?userName=$loginId");
} else {
    header("Location:login.html?errorCode=1");
}

?>