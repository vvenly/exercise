<?php
header("Content-Type:application/json");
@$e=$_REQUEST['ename'] or die('"code":-2,"msg":"ename required"');
@$c=$_REQUEST['cname'] or die('"code":-3,"msg":"cname required"');


$conn=mysqli_connect('127.0.0.1','root','','exercise',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="INSERT INTO wordbook VALUES(NULL,'$e','$c')";
$result=mysqli_query($conn,$sql);


$output=[
    'code'=>1,
    'msg'=>'add succ',
    'cid'=>mysqli_insert_id($conn)
];
echo json_encode($output);