<?php
header("Content-Type:application/json;charset=UTF-8");
@$uid=@_REQUEST['uid'] or die('{"code":-2,"msg":"用户ID不能为空"}');
require('1_init.php');

$output=[
    'uid'=>$uid;
    'total'=>0,
    'used'=>0
];
$sql="SELECT SUM(price) FROM jd_order WHERE userId='$uid'";
$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_row($result);
$output['total']=floor($row[0]/1000);


$sql="SELECT COUNT(*) FROM jd_lottery WHERE userId='$uid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$output['used']=intval($row[0]);

echo json_encode($output);


