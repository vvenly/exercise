<?php
header("Content-type:application/json");
@$n=$_REQUEST['uname'] or die('{"code":-2,"msg":"用户名不能为空"}');
@$p=$_REQUEST['upwd'] or die('{"code":-3,"msg":"密码不能为空"}');
require("init.php");
$sql="SELECT uid FROM jd_user WHERE uname='$n' AND upwd='$p'";
$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_row($result);

if($row===null){//如果结果集中没有记录
	echo'{"code":-1,"msg":"用户名或密码错误"}';
}else{//如果结果集中有记录
	$uid=$row[0];
	$output=[
		'code'=>1,
		'msg'=>'登录成功',
		'uname'=>$n,
		'uid'=>$uid
	];
	echo json_encode($output);
}