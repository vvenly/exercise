<?php
header("Content-Type:application/json;charset=UTF-8");

$output=[
    ['lable'=>'总进度','value'=>25000],
    ['lable'=>'总完成进度','value'=>15000],
    ['lable'=>'左线总进度','value'=>13000],
    ['lable'=>'左线累计完成进度','value'=>6700],
    ['lable'=>'右线总进度','value'=>12000],
    ['lable'=>'右线累计完成进度','value'=>8300]

];
echo json_encode($output);