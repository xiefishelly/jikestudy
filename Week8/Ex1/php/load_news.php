<?php

session_start();
if(!isset($_SESSION['user'])){
    echo "-1";
} else {
    header("Content-Type:text/html;charset=utf-8");
    require "sql.php";

    $id = $_POST['id'];
    $id  = mysqli_real_escape_string($con, $id);
    $query = "SELECT * FROM news WHERE id = '$id'";

    $result = mysqli_query($con,$query);
    $data = array();
    while ($line = mysqli_fetch_assoc($result)) {
        $data['title'] = $line['title'];
        $data['id'] = $line['id'];
        $data['summary'] = $line['summary'];
        $data['date'] = $line['date'];
        $data['state'] = $line['state'];
        $data['type'] = $line['type'];
        $data['imgdir'] = $line['imgdir'];
    }
    mysqli_close($con);
    echo json_encode($data);
    
}