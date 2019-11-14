<?php
header("Content-Type:application/json;charset=UTF-8");
@$rn=$_REQUEST['rcvName'] or die('{"code":-2,"msg":"收件人姓名不能为空"}');
@$ra=$_REQUEST['rcvAddr'] or die('{"code":-3,"msg":"收件地址不能为空"}');
@$rp=$_REQUEST['rcvPhone'] or die('{"code":-4,"msg":"手机号不能为空"}');
@$pr=$_REQUEST['price'] or die('{"code":-5,"msg":"价格不能为空"}');
@$pm=$_REQUEST['payment'] or die('{"code":-6,"msg":"支付方式不能为空"}');
@$uid=$_REQUEST['userId'] or die('{"code":-7,"msg":"用户ID不能为空"}');
@$ot=time()*1000;
@$os=1;

require('1_init.php');
$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);

//插入订单记录，得到订单编号
$sql="INSERT INTO jd_orders VALUE(null,'$rn','$ra','$rp','$pr','$pm','$uid')";
mysqli_query($conn,$sql);
$oid=mysqli_insert_id($conn);

//echo($oid);
//查询当前购物车的内容
$sql="SELECT did,productId,count FROM jd_cart_detail WHERE cartId=(SELECT cid FROM jd_cart WHERE userId='$uid')";
$result=mysqli_query($conn,$sql);
$productList=mysqli_fetch_all($result,MYSQLI_ASSOC);

//var_dump($productList);

foreach($productList as $p){
    //根据购物车内容，生成订单详情
    $sql="INSERT INTO jd_order_detail VALUES(null,'$oid','$p[productId]','$p[count]')";
    mysqli_query($conn,$sql);

    $sql="DELETE FROM jd_order_detail WHERE did=$p[did]";
    mysqli_query($conn,$sql);
}

echo '{"code":1,"msg":"订单生成成功","oid":'.$oid.'}';