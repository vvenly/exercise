<?php
header("Content-Type:application/json;charset=UTF-8");
@$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"用户ID不能为空"}');

require("1_init.php");
$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);
$sql="SELECT * FROM jd_order WHERE userId='$uid'";
$result=mysqli_query($conn,$sql);
$orderList=mysqli_fetch_all($result,1);

foreach($orderList as $i=>$order){
    $oid=$order['oid'];
    $sql="SELECT * FROM jd_product WHERE pid IN(SELECT productId FROM jd_order_detail WHERE orderId=$oid)";
    $result=mysqli_query($conn,$sql);
    $plist=mysqli_fetch_all($result,1);
    $orderList[$i]['products']=$plist;//必须修改原始列表的内容
}

echo json_encode($orderList);