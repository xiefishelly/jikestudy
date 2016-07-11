<?php
    session_start();
    ini_set('date.timezone','Asia/Shanghai');
    if(!isset($_SESSION['user'])){
        echo "-1";
    } else {
        require "sql.php";
        $title = $_POST['title'];
        $summary = $_POST['summary'];
        $type = $_POST['type'];
        $state = $_POST['state'];
        $filePath = "";
        if (!$_FILES['data']['error'] > 0) {
            $lastindex = explode('.',$_FILES['data']['name']);
            $filePath =  'upload/'.$_SESSION['user']."_".date("ymdhis",time()).".".$lastindex[1];
            move_uploaded_file($_FILES['data']['tmp_name'], $filePath);
        } else {
            if(isset($_POST["rphoto"])){
                $filePath = $_POST["rphoto"];
            } 
        }
        $date = date("Y-m-d H:i:s");
        if(isset($_POST["id"])){
            $id = $_POST["id"];
            $sql = "UPDATE news SET title ='$title' ,summary = '$summary',type ='$type' ,state = '$state',imgdir = '$filePath',date = '$date' WHERE id = '$id'";
        } else {
            $sql = "INSERT INTO news(title,summary,type,state,imgdir,date) VALUES ('$title','$summary','$type','$state','$filePath','$date')";

        }
       $res = mysqli_query($con, $sql);
        if($res==1){
            echo "1";
        } else {
            echo "2";
        }
        mysqli_close($con);
    }

?>