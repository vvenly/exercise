<?php
header("Content-Type:application/json;charset=UTF-8 ");

@$userId = $_REQUEST['uid'] or die('{"code":-2,"msg":"用户编号不能为空"}');//服务器端向客户端接收的必要数据
@$productId = $_REQUEST['pid'] or die('{"code":-3,"msg":"产品编号不能为空"}');
require("init.php");

//1、根据用户编号查询对应的购物车编号(创建了一个专门包含用户ID和购物车ID的表)
$sql = "SELECT cid FROM jd_cart WHERE userId='$userId'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);




//2、
if($row===null){//如果没有查询到购物车编号
	//如果用户没有购物车，就添加一个，(只需往jd-cart表格添加购物车ID即可)
	$sql="INSERT INTO jd_cart VALUES(NULL,'$userId')";
	mysqli_query($conn,$sql);
	$cartId=mysqli_insert_id($conn);//读取刚创建的购物车编号
}else{
	$cartId=$row[0];
}
//echo $cartId;


//3、查询购物车的详情，对应的购物车编号+产品编号是否存在
$sql = "SELECT did,count FROM jd_cart_detail WHERE cartId='$cartId' AND productId='$productId'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);

//var_dump( $row);

//4、
if($row===null){//指定购物车中没有该商品的购买记录
	//若没有买过该商品，则插入一条购买商品记录,购买数量为1；
	$sql = "INSERT INTO jd_cart_detail VALUES(NULL,'$cartId','$productId','1')";
	mysqli_query($conn,$sql);
	$count = 1;
}else{	//如果购物车中买过该商品，则在购买数量上+1；
	$did=$row[0];//商品详情编号
	$count=$row[1];	//商品购买数量
	$count++;
	$sql = "UPDATE jd_cart_detail SET count='$count' WHERE did='$did'";
	mysqli_query($conn,$sql);
}
echo'{"code":1,"msg":"购买成功","count":'.$count.'}';