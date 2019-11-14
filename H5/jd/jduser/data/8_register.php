<?php
/*
*接收客户端提交的uname和upwd，
*添加入数据库，返回{"code":1,"msg":"注册成功","uid":23}或者{"code":-2,"msg":"用户名不能为空"}
*/
header('Content-Type: application/json');

@$n = $_REQUEST['uname'] or die('{"code":-2,"msg":"用户名不能为空"}');
@$p = $_REQUEST['upwd'] or die('{"code":-3,"msg":"用户密码不能为空"}');

require('1_init.php');

$sql = "INSERT INTO jd_user VALUES(NULL,'$n','$p')";
$result = mysqli_query($conn,$sql);

//DML: false或true
$uid = mysqli_insert_id($conn);
$output = [
    'code'=>1,
    'msg'=>'新用户添加成功',
    'uid'=>$uid
];
echo json_encode($output);

