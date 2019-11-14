<?php
header("Content-type:application/json");
require("init.php");
$sql="SELECT * FROM jd_product LIMIT 0,8";
$result=mysqli_query($conn,$sql);

$al=mysqli_fetch_all($result,1);
	echo json_encode($al);