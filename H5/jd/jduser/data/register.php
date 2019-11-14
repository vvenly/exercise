<?php
header("Content-Type:application/json;charset=UTF-8");
@$n=$_REQUEST['uname'] or die('{"code":-2,"msg":"用户名不能为空"}');
@$p=$_REQUEST['upwd'] or die('{"code":-3,"msg":"密码不能为空"}');
require('init.php');
$sql="INSERT INTO jd_user VALUES(NULL,'$n','$p')";
$result=mysqli_query($conn,$sql);

$uid=mysqli_insert_id($conn);
$output=[
    'code'=>1,
    'msg'=>'注册成功',
    'uid'=>$uid
   ];
  echo json_encode($output);

