<?php
session_start();
if(!isset($_SESSION['user'])){
    echo "-1";
} else {
    require "sql.php";
    $loginId = $_POST['loginId'];
    $loginId  = mysqli_real_escape_string($con, $loginId);

    $sql = "SELECT * FROM user WHERE loginid='$loginId'";
    $res = mysqli_query($con, $sql);
    $nums = mysqli_num_rows($res);
    if($nums == 1){
        echo 2;
    } else {
        echo 1;
    }
    mysqli_close($con);
}
?>