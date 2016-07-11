<?php
session_start();
if(isset($_SESSION['user']) || isset($_POST["type"])){
    header("Content-Type:text/html;charset=utf-8");
    require "sql.php";

    $data = array();
    $queryResult = array();

    $ls = $_REQUEST["ls"];
    $cp = $_REQUEST["cp"];

    $a = ($cp-1)*$ls;
    $b = ($cp)*$ls;

    if(isset($_POST["type"])){
        $type = $_POST["type"];
        $query = "SELECT * FROM news WHERE type = '$type' ORDER BY date DESC LIMIT $a,$b ";
    } else {
        $query = "SELECT * FROM news ORDER BY date DESC LIMIT $a,$b ";
    }


    $result = mysqli_query($con,$query);
    $i = 0;
    while ($line = mysqli_fetch_assoc($result)) {
        $temp = array();
        $temp['title'] = $line['title'];
        $temp['id'] = $line['id'];
        $temp['summary'] = $line['summary'];
        $temp['date'] = $line['date'];
        $temp['state'] = $line['state'];
        $temp['type'] = $line['type'];
        $temp['imgdir'] = $line['imgdir'];
        $queryResult[$i] = $temp;
        $i ++;
    }
    $data['data'] = $queryResult;
    $query = "SELECT * FROM news ";
    $result = mysqli_query($con,$query);
    $nums = mysqli_num_rows($result);
    $nums = floor($nums / 9)+1;
    $data["allPage"]=$nums;
    mysqli_close($con);
    echo json_encode($data);

} else {
    echo "-1";
}
?>