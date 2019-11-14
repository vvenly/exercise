// (function () {
//     commandList(1,10);
//     // getTrainProject("command_train");
//     searchUser();
//
//     getTemp();
//     getTrain();
//
//     stationListSel();
// })();

$(document).ready(function () {
    commandList(1,10);
    // getTrainProject("command_train");
    searchUser();

    getTemp();
    getTrain();

    stationListSel();
})

function commandList(page, pageSize) {
    var dateFrom=$("#begin_time").val(),dateEnd=$("#end_time").val();
    var objTime=timestamp(dateFrom,dateEnd);
    $.ajax({
        type: "POST",
        url: webUrl.getCommandList,
        dataType: "json",
        data: {"page": page,"page_size":pageSize,"train_id":$("#command_train").val(),
            "issuer_user_id":$("#command_issuer").val(),"train_leader_user_id": $("#command_leader").val(),
            "driver_user_id": $("#command_driver").val(),"status":$("#command_status").val(),
            "from_time":objTime.a,"end_time":objTime.b
        },
        success: function (json) {
            var host = window.location.href, urlType=host.substr(host.length-1,1), urlReal="",count=json.count;
            if(urlType=="2"){
                urlReal=webUrl.commandPrint2;
            }else{
                urlReal=webUrl.commandPrint;
            }

            if(count>0){

                var html = "", pageNumber = Math.ceil(count/pageSize),status="",invalid,Del,Data=json.data;
                for (var i = 0,len=Data.length; i < len; i++) {

                    var sendTime=timestampShow(Data[i].send_time),confirmTime=(Data[i].confirm_time ==0 )? "暂未确认" :timestampShow(Data[i].confirm_time);

                    status=Data[i].status;
                    switch (status){
                        case 0:
                            status="新命令";
                            invalid="";
                            Del="disabled";
                            break;
                        case 1:
                            status="已接收";
                            invalid="";
                            Del="disabled";
                            break;
                        case 2:
                            status="已经确认";
                            Del="disabled";
                            invalid="";
                            break;
                        case 3:
                            status="作废";
                            invalid = "disabled";
                            Del="";
                            break;
                        case 4:
                            status="确认作废";
                            invalid = "disabled";
                            Del="";
                            break;
                        case 5:
                            status="完成";
                            invalid = "disabled";
                            Del="disabled";
                            break;
                        case 6:
                            status="拒绝";
                            invalid = "disabled";
                            Del="disabled";
                            break;
                    }

                    html +="<tr>"
                        +"<td class='comdata-cid' hidden>" +Data[i].id+"</td>"
                        +"<td class='comdata-coms' data-station='"+Data[i].commanded_station+"' data-duty='"+Data[i].duty_officer_user_real_name+"' data-Sduty='"+Data[i].duty_officer_status+"' data-Sdriver='"+Data[i].driver_status+"' data-Sleader='"+Data[i].train_leader_status+"'>" +Data[i].num +"</td>"
                        +"<td class='comdata-cname'>"+Data[i].train_name+"</td>"
                        +"<td>" +Data[i].train_leader_user_real_name +"</td>"
                        +"<td class='comdata-driver'>" +Data[i].driver_user_real_name +"</td>"
                        +"<td class='tooltip' data-content='"+Data[i].receiptor+"' title='"+Data[i].receiptor+"'>" +tailorContent(Data[i].receiptor,9) +"</td>"
                        +"<td>" +Data[i].issuer_user_real_name +"</td>"
                        +"<td>" +status +"</td>"
                        +"<td>" +sendTime +"</td>"
                        +"<td>" +confirmTime +"</td>"
                        +"<td hidden>" +Data[i].order_content +"</td>"
                        +"<td>"
                        +"<button class='btn btn-software getDesc' data-toggle='modal' data-target='#myModal' onclick='getDesc(this)'>详情</button> &nbsp; "
                        +"<button class='btn btn-warn' "+invalid+" onclick='cancelCommand(this)'>作废</button> &nbsp; "
                        +"<button class='btn btn-delete' "+Del+" onclick='delTableDatas(webUrl.commandDel,"+Data[i].id+",commandList,"+count+")'>删除</button> &nbsp; "
                        +"<a href='" + urlReal+"/"+Data[i].id + " ' class='btn btn-green'>打印信息</a>"
                        +"</td></tr>" ;
                }

                $("#commandListPage").html(html);

                $('.tooltip').toolTip();//title


                paging(page,pageSize,pageNumber,".pagination","commandList",count);

                testInnersFn("commandListPage");

                // var refresh='<button class="btn btn-success" onclick="commandList('+page+',10)"> &nbsp; &nbsp;<span class="myIco icoRefresh"></span> 更新信息 &nbsp;  &nbsp;</button>';
                //
                // $("#replaceBtn").replaceWith(refresh);


            }else{
                $("#commandListPage").html('<tr><td colspan="10" class="text-center">暂无相关调度信息</td></tr>');
            }
        },
        error: function () {
            console.log("请求失败");
        }
    })
}

//添加调度事件
function addCommand() {
    var trainId=$("#trainName").val(),trainNum=$("#add_num").val(),rec=$("#add_receiptor").val(),leader=$("#add_train_leader").val(),driver=$("#add_train_driver").val(),
        issuer=$("#add_train_issuer").val(),content=$("#add_order_content").val(),type=$("#add_train_type").val(),
        station_id=$("#add_command_station").val(),duty_id=$("#add_command_watcher").val();


    var testNum=testInfo("command_add_modal");

    var testA=/\([0-9]{4}\)+字第\([0-9]{1,2}\.[0-9]{1,2}\)-[0-9]{4}|[0-9]{5}/;

    var alertDiv=$("#add_message");


    if(!testA.test(trainNum)){
        $("#add_alert_num").html("格式不正确").css("display","block");
    }else if(testNum===5){

        $.ajax({
            type: "POST",
            url: webUrl.commandAdd,
            dataType: "json",
            data: {"train_id": trainId,"num":trainNum,"receiptor":rec,
                "train_leader_user_id":leader,"driver_user_id":driver,
                "issuer_user_id":issuer,"order_content":content,
                "type":type,"status":0,"commanded_station":station_id,"duty_officer_user_id":duty_id
            },
            success: function (json) {
                // console.log(json);
                if(json.status===0){

                    $("#add_message,.textError").css("display","none");

                    // alert("添加成功");

                    alertDiv.html("添加成功").css("display","block");


                    setTimeout(function () {
                        location.reload(window.location.href);

                    },700);

                    // $("#myModal_add").modal('toggle');
                    // commandList(1,10);
                    // //验证之后清空内容
                    // $(".clearInner").val("");
                    // $(".textError").css("display","none");
                    // $("#add_order_content").val($("#templateSel").find("option:selected").attr("data-content"));//内容为选中模板的内容
                    // $("#add_receiptor").val("司机车长及施工负责人");
                    // $("#add_command_station").val("");
                    //
                    // setCommandNum();
                }else{
                    jsonAdd('#add_message',json);
                }
            },
            error: function () {
                console.log("请求失败");
            }
        })
    }else{
        $("#add_message").css("display","block").html("请填写完整的信息");
    }
}


function getDesc(that){
    var elementA=$(that), parents=elementA.parent();

    var content=encodeUnicode(parents.siblings("td:eq(10)").html()),desc="";

    var contentArr=content.split("\\u00a");

    for(var i=0;i<contentArr.length;i++){
        desc+=reconvert(contentArr[i]);
        desc+="<br>";
    }

    var td1=parents.siblings("td:eq(1)");


    var driverStatus=(td1.attr("data-Sdriver")==0)? "未查收" : "收到";

    var leaderStatus=(td1.attr("data-Sleader")==0)? "未查收" : "收到";


    var dutyStatus=(td1.attr("data-Sduty")==0)? "未查收" : "收到";


    var station=(td1.attr("data-station") == "") ? "无" : td1.attr("data-station"),
        duty=(td1.attr("data-duty") == "null") ? "无" : td1.attr("data-duty");

    $('.desc_num').html(td1.html());
    $('.desc_issuer').html(parents.siblings("td:eq(6)").html());
    $('.desc_driver').html(parents.siblings("td:eq(4)").html());
    $('.desc_train_leader').html(parents.siblings("td:eq(3)").html());
    $('.desc_receiptor').html(parents.siblings("td:eq(5)").attr("data-content"));
    $('.desc_time').html(parents.siblings("td:eq(8)").html());
    $('.desc_status').html(parents.siblings("td:eq(7)").html());
    $('.desc_station').html(station);
    $('.desc_duty').html(duty);
    $('.driver_confirm').html(driverStatus);
    $('.leader_confirm').html(leaderStatus);
    $('.duty_confirm').html(dutyStatus);
    $('.desc_content').html(desc).css('wordBreak','break-all');
    $('.desc_train').html(parents.siblings("td:eq(2)").html());
    $('.confirm_time').html(parents.siblings("td:eq(9)").html());


    if(duty=="无" && station=="无"){
        $("#descDutyDiv").css("display","none");
    }else{
        $("#descDutyDiv").css("display","block");
    }
}

//获取列车信息
function getTrain() {
    $.ajax({
        type: "POST",
        url: webUrl.getTrains,
        dataType: "json",
        // data:{"company_id":getSelectedValue(cid)},
        success: function (json) {
            // console.log(json);
            var html="<option value=''>请选择</option>";
            if(json.count>0){
                for(var i=0,len=json.data.length;i<len;i++){
                    html+="<option value='"+json.data[i].id+"'>"+json.data[i].name+"</option>";
                }
                $('.trainName').html(html);
            }else{
                $('.trainName').html(html);
            }

        },
        error: function () {
            console.log("请求失败");
        }
    })
}

//
function trainFreeSel() {
    $.ajax({
        type: "POST",
        url: webUrl.freeTrain,
        dataType: "json",
        // data:{"company_id":getSelectedValue(cid)},
        success: function (json) {
            // console.log(json);
            var Data=json.data;

            // var html="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>请选择列车</a></li>";
            var html="";
            if(json.count>0){
                for(var i=0,len=json.data.length;i<len;i++){
                    html+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+Data[i].id+"' onclick='selIncident(event,\"#train_add\",\"#train_add_id\",\"#trainSelAdd\",\"#train_form\")'>"+Data[i].name+"</a></li>";
                }
                $('.train_free').html(html);
            }else{
                $('.train_free').html("<li><a style='color: #f00;' href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无可调度的列车</a></li>");
            }

        },
        error: function () {
            console.log("请求失败");
        }
    })
}

//分别获取司机、调度、车长
// function getUser(issuer,leader,driverId,watcher) {
//     $.post(webUrl.getCompanyUserList,
//         {
//             "company_id":$("#add_train_company_id").val()
//         },
//         function(json){
//             userSame(issuer,leader,driverId,watcher,json);
//         });
// }


function searchUser() {
    $.post(webUrl.getCompanyUserList, {
            "current_project": 1
        },
        function(json){
            // console.log(json);
            userSame(json);
        });
}

function userSame(json) {
    var driver=[],captain=[],dispatcher=[],watcherArr=[],manager=[];
    var dHtml="",cHtml="",disHtml="",wisHtml="",maHtml="";
    if(json.count>0){
        for(var i=0,len=json.data.length;i<len;i++){
            if(json.data[i].type==1){
                driver.push(json.data[i]);
            }
            if(json.data[i].type==2){
                captain.push(json.data[i]);
            }
            if(json.data[i].type==3){
                dispatcher.push(json.data[i]);
            }
            if(json.data[i].type==4){
                watcherArr.push(json.data[i]);
            }

            if(json.data[i].type==5){
                manager.push(json.data[i]);
            }
        }

        var driverLen=driver.length,
            capLen=captain.length,
            disLen=dispatcher.length,
            watLen=watcherArr.length,
            mLen=manager.length;

        if(driverLen>0){
            for(var d=0;d<driverLen;d++){   //司机列表
                // dHtml+="<option value='"+driver[d].id+"'>"+driver[d].real_name+"</option>";
                dHtml+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+driver[d].id+"' onclick='selIncident(event)'> "+driver[d].real_name+" </a></li>";
            }
        }else{
            dHtml="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无司机</a></li>";
        }


        if(capLen>0){
            for(var c=0;c<capLen;c++){   //车长列表
                // cHtml+="<option value='"+captain[c].id+"'>"+captain[c].real_name+"</option>";
                cHtml+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+captain[c].id+"' onclick='selIncident(event)'> "+captain[c].real_name+" </a></li>";
            }
        }else{
            cHtml="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无车长</a></li>";
        }


        if(disLen>0){
            for(var s=0;s<disLen;s++){    //调度员
                // disHtml+="<option value='"+dispatcher[s].id+"'>"+dispatcher[s].real_name+"</option>";
                disHtml+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+dispatcher[s].id+"' onclick='selIncident(event)'> "+dispatcher[s].real_name+" </a></li>";
            }
        }else{
            disHtml="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无调度员</a></li>";
        }


        if(watLen>0){
            for(var w=0;w<watLen;w++){    //值班员
                // wisHtml+="<option value='"+watcherArr[w].id+"'>"+watcherArr[w].real_name+"</option>";
                wisHtml+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+watcherArr[w].id+"' onclick='selIncident(event)'> "+watcherArr[w].real_name+" </a></li>";
            }
        }else{
            // wisHtml="<option value=''> 暂无值班员 </option>";
            wisHtml="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无值班员</a></li>";
        }

        if(mLen>0){
            for(var m=0;m<mLen;m++){    //负责人
                // wisHtml+="<option value='"+watcherArr[w].id+"'>"+watcherArr[w].real_name+"</option>";
                maHtml+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+manager[m].id+"' onclick='selIncident(event)'> "+manager[m].real_name+" </a></li>";
            }
        }else{
            // wisHtml="<option value=''> 暂无值班员 </option>";
            maHtml="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id=''>暂无负责人</a></li>";
        }
    }

    $(".c_leader").html(cHtml);
    $(".c_driver").html(dHtml);
    $(".c_issuer").html(disHtml);
    $(".c_duty").html(wisHtml);
    $(".c_manager").html(maHtml);

}


// function userSame(issuer,leader,driverId,watcher,json) {
//     var driver=[],captain=[],dispatcher=[],watcherArr=[];
//     var dHtml="<option value=''> 请选择司机 </option>",cHtml="<option value=''> 请选择车长 </option>",disHtml="<option value=''> 请选择调度员 </option>",wisHtml="<option value=''> 请选择值班员 </option>";
//     if(json.count>0){
//         for(var i=0,len=json.data.length;i<len;i++){
//             if(json.data[i].type==1){
//                 driver.push(json.data[i]);
//             }
//             if(json.data[i].type==2){
//                 captain.push(json.data[i]);
//             }
//             if(json.data[i].type==3){
//                 dispatcher.push(json.data[i]);
//             }
//             if(json.data[i].type==4){
//                 watcherArr.push(json.data[i]);
//             }
//         }
//
//         var driverLen=driver.length,capLen=captain.length,disLen=dispatcher.length,watLen=watcherArr.length;
//
//         if(driverLen>0){
//             for(var d=0,dls=driver.length;d<dls;d++){   //司机列表
//                 dHtml+="<option value='"+driver[d].id+"'>"+driver[d].real_name+"</option>";
//             }
//         }else{
//             dHtml="<option value=''> 暂无司机 </option>";
//         }
//
//
//         if(capLen>0){
//             for(var c=0,cls=captain.length;c<cls;c++){   //车长列表
//                 cHtml+="<option value='"+captain[c].id+"'>"+captain[c].real_name+"</option>";
//             }
//         }else{
//             cHtml="<option value=''> 暂无车长 </option>";
//         }
//
//
//         if(disLen>0){
//             for(var s=0,sls=dispatcher.length;s<sls;s++){    //调度员
//                 disHtml+="<option value='"+dispatcher[s].id+"'>"+dispatcher[s].real_name+"</option>";
//             }
//         }else{
//             disHtml="<option value=''> 暂无调度员 </option>";
//         }
//
//
//         if(watLen>0){
//             for(var w=0,wls=watcherArr.length;w<wls;w++){    //值班员
//                 wisHtml+="<option value='"+watcherArr[w].id+"'>"+watcherArr[w].real_name+"</option>";
//             }
//         }else{
//             wisHtml="<option value=''> 暂无值班员 </option>";
//         }
//
//     }
//
//
//     $(leader).html(cHtml);
//     $(driverId).html(dHtml);
//     $(issuer).html(disHtml);
//     $(watcher).html(wisHtml);
//
// }

function cancelCommand(that) {
    if(window.confirm('确认作废命令?')){
        $.ajax({
            type: "POST",
            url: webUrl.cancelCommand,
            dataType: "json",
            data:{"id": $(that).parent().parent().find("td:eq(0)").html(),"status": 3},
            success: function (json) {
                //  console.log(json);
                if(json.status==0){
                    alert("作废成功");
                    commandList(Number($('#current_page').html()),10);
                }else{
                    jsonMsgS(json);
                }
            },
            error: function () {
                console.log("请求失败");
            }
        })
    }else{
        console.log("取消");
    }
}

function addTemp() {
    var name=$("#tempName").val(),content=$("#tempContent").val();
    if(!name || !content){
        $("#add_alert_info").css("display","block").html("请填写完整的信息");
    }else{
        $.ajax({
            type: "POST",
            url: webUrl.commandAddTemp,
            dataType: "json",
            data:{"title": name, "content": content},
            success: function (json) {
                // console.log(json);
                if(json.status==0){
                    $("#add_alert_info").css("display","block").html("添加成功");
                    $(".clearI").val("");
                    getTemp();
                    $("#add_order_content").val($("#tempContent").val());
                }else{
                    jsonAdd('#add_message',json);
                }
            },
            error: function () {
                console.log("请求失败");
            }
        })
    }
}

//新建内容模板
// function getTemp() {
//     $.ajax({
//         type: "POST",
//         url: webUrl.commandTemp,
//         dataType: "json",
//         data:{"title": $("#tempName").val(), "content": $("#tempContent").val()},
//         success: function (json) {
//             // console.log(json);
//             var optionVal="<option value='0' data-content='准许_____号轨道车由___站___线发车，经___站___线行至__站间工地方向，在此区域内进行________作业，完毕后沿____线返回____站下料口停妥，现时刻办理。\n时间：___月___日___时__分——___月___日___时___分。\n注意事项：加强瞭望，严守速度，保证联系畅通，停车及施工过程中做好防溜保护措施，确保安全'>命令内容默认模板</option>>";
//             if(json.count>0){
//                 for(var i=0,len=json.data.length;i<len;i++){
//                     optionVal+="<option value='"+json.data[i].id+"' data-content='"+json.data[i].content+"'>"+json.data[i].title+"</option>";
//                 }
//             }
//             $("#templateSel").html(optionVal);
//         },
//         error: function () {
//             console.log("请求失败");
//         }
//     })
// }

function getTemp() {
    $.ajax({
        type: "POST",
        url: webUrl.commandTemp,
        dataType: "json",
        data:{"title": $("#tempName").val(), "content": $("#tempContent").val()},
        success: function (json) {
            // console.log(json);
            var Data=json.data;
            var liContent="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='0' data-content='准许_____号轨道车由___站___线发车，经___站___线行至__站间工地方向，在此区域内进行________作业，完毕后沿____线返回____站下料口停妥，现时刻办理。\n时间：___月___日___时__分——___月___日___时___分。\n注意事项：加强瞭望，严守速度，保证联系畅通，停车及施工过程中做好防溜保护措施，确保安全'>命令内容默认模板</a><b>X</b></li>";

            // var optionVal="<option value='0' >命令内容默认模板</option>>";
            if(json.count>0){
                for(var i=0,len=Data.length;i<len;i++){
                    // liContent+="<option value='"+Data[i].id+"'>"+Data[i].title+"</option>";

                    liContent+="<li><a href='javascript:;' role='tab' data-toggle='tab' data-id='"+Data[i].id+"' data-content='"+Data[i].content+"'> "+Data[i].title+" </a><b onclick='delTemplate()'>X</b></li>";
                }
            }
            $("#templateSel").html(liContent);
        },
        error: function () {
            console.log("请求失败");
        }
    })
}


$("#templateSel").on("click","a",function (e) {
    e.stopPropagation();

    var ele=$(e.target);

    var currentVal=ele.attr("data-content");
    $("#add_order_content").val(currentVal);


    $("#templateAdd").val(ele.html());

    $("#templateId").val(ele.attr("data-id"));


    console.log($("#templateId").val());


    $("#templateSel").dropdown('toggle');


});

function delTemplate() {
    if(window.confirm('确认要删除此模板?!')){
        $.ajax({
            type: "post",
            url: webUrl.commandDelTemp,
            dataType: "json",
            data: {"id": $("#templateId").val()},
            success: function (json) {
                if(json.status==0){
                    alert("删除成功");

                    $("#templateAdd,#templateId,#add_order_content").val("");
                }else{
                    alert("删除失败");
                }
                getTemp();
            },
            error: function () {
                console.log("请求失败");
            }
        })
    }else{
        console.log("取消删除");
    }
}

function setCommandNum() {
    $.get(webUrl.commandNum,
        function(json){
            // console.log(json);
            $("#add_num").val(json.data.num);
        });
}