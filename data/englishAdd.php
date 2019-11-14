<?php
header("Content-Type:application/json; charset=utf-8");
@$e=$_REQUEST['ename'] or die('"code":-2,"msg":"ename required"');
@$c=$_REQUEST['cname'] or die('"code":-3,"msg":"cname required"');

$conn=mysqli_connect('127.0.0.1','root','','exercise',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="INSERT INTO wordbook VALUES(NULL,'$e','$c')";

$result=mysqli_query($conn,$sql);
//var_dump($result);
if($result){
    echo json_encode('添加成功');
    echo json_encode("新增编号为".mysqli_insert_id($conn));
}else{
    echo json_encode("添加失败");
}

//$li=mysqli_fetch_all($result, MYSQLI_ASSOC);
//
//echo json_encode($li);
