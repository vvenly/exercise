<?php
header("Content-type:application/json");
@$pno=$_REQUEST['pageNum'];
if($pno===null){
	$pno=1;
}else{
	$pno=intval($pno);//http传输过来的默认都是字符串，这里需要转为整数
}
//var_dump($pno);
require('init.php');
$output=[
	'recordCount'=>0,//总记录数
	'pageSize'=>8,	//页面显示总数
	'pageCount'=>0,	//页面总数
	'pageNum'=>$pno,	//当前显示的页号
	'data'=>null	//当前页中的数据
];//最后必须要的是对象，必须是关联数组才能转为对象

$sql="SELECT COUNT(*) FROM jd_product";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
$output['recordCount']=intval($row[0]);

//计算总的页数
$output['pageCount']=ceil($output['recordCount']/$output['pageSize']);  

//查询出当前页中的记录行
$start=($output['pageNum']-1)*$output['pageSize'];//当前页中的行数
$count=$output['pageSize'];//一次最多读取的行数
$sql="SELECT * FROM jd_product LIMIT $start,$count";
$result=mysqli_query($conn,$sql);
$output['data']=mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($output);
