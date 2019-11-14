<?php
header("Content-Type:application/json;charset=UTF-8");

//@$uid=$_REQUEST['uid'] or die('"code":-2,"msg":"用户ID不能为空"');

//伪造数据库
$output=[
    ['lable'=>'1月','value'=>4000],
    ['lable'=>'2月','value'=>5000],
    ['lable'=>'3月','value'=>3000],
    ['lable'=>'4月','value'=>6000],
    ['lable'=>'5月','value'=>6500],
    ['lable'=>'6月','value'=>7500],
    ['lable'=>'7月','value'=>5000],
    ['lable'=>'8月','value'=>2500],
    ['lable'=>'9月','value'=>1600],
    ['lable'=>'10月','value'=>950],
    ['lable'=>'11月','value'=>3000],
    ['lable'=>'12月','value'=>5800]

];
echo json_encode($output);

