<?php

    session_start();
    if(!isset($_SESSION['user'])){
        echo "-1";
    } else {
        $userName = $_POST['userName'];
        $pwd = $_POST['pwd'];

        require "sql.php";

        $sql = "INSERT INTO user(loginId,password) VALUES ('$userName','$pwd')";
        $res = mysqli_query($con, $sql);
        if($res==1){
            echo "1";
        } else {
            echo "2";
        }
        mysqli_close($con);
    }

?>