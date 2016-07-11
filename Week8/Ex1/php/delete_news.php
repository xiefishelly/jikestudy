<?php
    session_start();
    if(!isset($_SESSION['user'])){
        echo "-1";
    } else {
        require "sql.php";

        $id = $_POST["id"];

        $sql = "DELETE FROM news WHERE id = '$id'";
        $res = mysqli_query($con, $sql);
        if($res==1){
            echo "1";
        } else {
            echo "2";
        }
        mysqli_close($con);
    }

?>