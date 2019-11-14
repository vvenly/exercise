<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>项目运输总览</title>
    <link href="{{ m_asset('assets/data_pro/css/overview.css') }}" rel="stylesheet"/>
</head>
<body style="overflow: hidden;">
<div id="titleMain">
    {{ $projectTitle }}运输总览
</div>

<div id="listMain">
    <a href="#" class="backBtn" id="backA">
        <span class="span-logo3 logoBack"></span>
        <span style="position: relative;left:10px;bottom: 7px;">返回</span>
    </a>

    <div id="projectMarTop" class="border-bg1" style="margin: 20px auto;">
        <b class="triangle1"></b>
        <b class="triangle2"></b>
        <div id="left-first" style="padding: 25px 15px;">
            <div class='div-tr'>
                <div>当班调度</div>
                <div>
                    <b>{{ $dangBanDiaoDu->nickname ?? '' }}：</b>
                    {{ \App\Libs\StringLib::cutPhoneNumber($dangBanDiaoDu->phone ?? '') }}
                </div>
            </div>

            <div class='div-tr'>
                <div>副经理</div>
                <div>
                    <b>{{ $fuJingLi->nickname ?? '' }}：</b>
                    {{ \App\Libs\StringLib::cutPhoneNumber($fuJingLi->phone ?? '') }}
                </div>
            </div>

            <div class='div-tr'>
                <div>运输部长</div>
                <div>
                    <b>{{ $yunShuBuZhang->nickname ?? '' }}：</b>
                    {{ \App\Libs\StringLib::cutPhoneNumber($yunShuBuZhang->phone ?? '') }}
                </div>
            </div>

            <div class='div-tr'>
                <div>运输队长</div>
                <div>
                    <b>{{ $yunShuDuiZhang->nickname ?? '' }}：</b>
                    {{ \App\Libs\StringLib::cutPhoneNumber($yunShuDuiZhang->phone ?? '') }}
                </div>
            </div>

            <div class='div-tr'>
                <div>运输队书记</div>
                <div>
                    <b>{{ $yunShuDuiShuJi->nickname ?? '' }}：</b>
                    {{ \App\Libs\StringLib::cutPhoneNumber($yunShuDuiShuJi->phone ?? '') }}
                </div>
            </div>
        </div>

    </div>

    <div class="flat-bg3 overviewDiv" style="margin: 20px auto;" id="speCol4">
        {{--<h4 class="main-top" style="margin-bottom: 20px;"><b></b>人员状况</h4>--}}
        {{--<div class="col4">--}}
            {{--<h1>{{ $zhiGongCount }}</h1>--}}
            {{--<p>职工</p>--}}
            {{--</div>--}}

        {{--<div class="col4">--}}
            {{--<h1>{{ $paiQianShengCount }}</h1>--}}
            {{--<p>派遣生</p>--}}
            {{--</div>--}}

        {{--<div class="col4">--}}
            {{--<h1>{{ $laoWuGongCount }}</h1>--}}
            {{--<p>劳务工</p>--}}
            {{--</div>--}}
        <h4 class="main-top" style="position:relative;margin-bottom: 20px;">
            <b></b>运输统计
            <span style="position:absolute;top: 35px;right: 30px;color: #B6B0B0;font-size: 20px;">单位：  吨</span>
        </h4>

        {{--<h3 style="margin-bottom: 10px;color: #ddd;text-align: right;"></h3>--}}

        <div class="col4">

            <h1>{{ $todayGrossWeight }} </h1>

            <h4>今日总重</h4>
        </div>

        <div class="col4">
            <h1>{{ $monthGrossWeigh }} </h1>

            <h4>本月总重</h4>
        </div>

        <div class="col4">
            <h1>{{ $allGrossWeigh }} </h1>

            <h4>开累总重</h4>
        </div>



    </div>

    <div class="height-bg2 overviewDiv" style="margin: 20px auto;">
        <h4 class="main-top"><b></b>车辆状况</h4>
        <div class="col4">
            <h1>{{ $neiRanCount }}</h1>
            <h4>内燃机车</h4>
        </div>
        <div class="col4">
            <h1>{{ $guiDaoCount }}</h1>
            <h4>轨道车</h4>
        </div>
        <div class="col4">
            <h1>{{ $luYongPingBanCount }}</h1>
            <h4>路用平板</h4>
        </div>
        <div class="col4">
            <h1>{{ $shiZhaCheCount }}</h1>
            <h4>石渣车</h4>
        </div>
        <div class="col4">
            <h1>{{ $yunYongPingBanCount }}</h1>
            <h4>运用平板</h4>
        </div>
    </div>
</div>

<div id="toggle-desc">
    <button id="plusWidth"><span class="glyphicon glyphicon-triangle-left" id="leftLogo"></span></button>

    <div id="toggle-title">
        <a href="#violaMain" data-toggle="tab" style="margin-left: 0" onclick="violationList(1,7)">
            <span class="span-logo3 violation"></span>
            <b>违章总览</b>
        </a>
        <a href="#planMain" data-toggle="tab" onclick="planList(1,7)">
            <span class="span-logo3 logoPlan"></span>
            <b>计划总览</b>
        </a>
        <a href="#trainMain" data-toggle="tab" onclick="trainList(1,9)">
            {{--onclick="trainList(0,7);"--}}
            <span class="span-logo3 logo-train"></span>
            <b>车辆总览</b>
        </a>
        <a href="#userMain" data-toggle="tab" onclick="userList()">
            {{--onclick="userList(0,7)"--}}
            <span class="span-logo3 logo-user"></span>
            <b>人员总览</b>
        </a>
        <a href="#stationMain" data-toggle="tab" onclick="stationList(0,7)" style="margin-right: 0">
            {{--onclick="stationList(0,7)"--}}
            <span class="span-logo3 logo-station"></span>
            <b>车站总览</b>
        </a>
    </div>

    <div id="toggle-list" class="tab-content" style="color: #fff;">

        <div class="tab-pane fade in active" id="violaMain">
            <table class='table table-port'>
                <thead>
                <tr>
                    <th>时间</th>
                    <th>机车名称</th>
                    <th>位置</th>
                    <th>线别</th>
                    <th>类型</th>
                </tr>
                </thead>
                <tbody id="violaBody"></tbody>
            </table>
            <div id="violaPage" class="pageCode"></div>
        </div>


        <div class="tab-pane fade" id="planMain">
            <table class='table table-port' id='planTable'>
                <thead>
                <tr>
                    <th>计划编号</th>
                    <th>列车类型</th>
                    <th>出发车次</th>
                    <th>返回车次</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody id="planBody"></tbody>
            </table>

            <div id="planPage" class="pageCode"></div>
        </div>

        <div class="tab-pane fade" id="trainMain">
            <table class='table table-port'>
                <thead>
                <tr>
                    <th>车号</th>
                    <th>类型</th>
                    <th>状态</th>
                    <th>详情</th>
                </tr>
                </thead>
                <tbody id="trainBody"></tbody>
            </table>
            <div id="trainPage" class="pageCode"></div>
        </div>

        <div class="tab-pane fade" id="userMain">
            <div style='padding: 18px 10px;' id="userBody"></div>
        </div>

        <div class="tab-pane fade" id="stationMain">
            <div style='padding: 15px 10px;text-align: left;' id="stationBody"></div>
        </div>
    </div>

    <div id="toggle-footer">
        <span class="span-logo4 logo-day"></span>
        <span class="span-logo4 logo-week"></span>
        <span class="span-logo4 logo-month"></span>
    </div>
</div>
<input type="hidden" id="ids" value="">
<input type="hidden" id="show_btn" value="">

<div class="modal fade" id="staModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modelBg">
        <div class="modal-content modal-del" style="width: 350px;margin: 13% auto;background: #3A3D4D;">
            <div class="modal-body" style="text-align: center;padding: 55px 0 20px;height: 230px;color: #ddd;">

                <h4 id="out_alert_msg" style="margin-bottom: 15px;">请确定要开站，开站后不可关闭！</h4>

                <h4>站点名称： <span id="stationOnName" style="margin-bottom: 50px;"></span></h4>

                <h4 id="sta_alert_msg" class="alert_message" style="margin: 23px 0;color: #00ff8b;height: 20px;"></h4>

                <input type="hidden" id="set_station_id">

                <button type="button" class="btn btn-success" style="font-size: 18px;padding: 5px 25px;" onclick="stationOn()">确认</button> &nbsp; &nbsp;

                <button type="button" class="btn btn-warning2" style="font-size: 18px;padding: 5px 25px;" data-dismiss="modal">取消</button>

            </div>
        </div>
    </div>
</div>

<script src="{{ asset('assets/data_pro/js/jQuery-3.3.1.min.js') }}"></script>
<script src="{{ m_asset('assets/data_pro/js/bootstrap.js') }}"></script>
<script src="{{ m_asset('assets/data_pro/js/common.js') }}"></script>

<script>

    window.refFn="";

    $("#toggle-title a").click(function () {
        $(this).addClass("active")
            .siblings().removeClass("active");
    });

    $("#plusWidth").click(function () {

        var spanEle = $(this).children("span");


        if (spanEle.attr("id") == "leftLogo") {
            $("#toggle-desc").animate({
                "width": "96%",
                "marginLeft": "2%"
            });

            $("#listMain").css("display", "none");

            // $("#toggle-desc").css({
            //     "width":"96%",
            //     "marginLeft":"2%"
            // });

            // $(".data-show").width(1830);
            // $(".data-show").css("width","1830px");
            $(".data-show").addClass("unfold");

            $(this).children().prop("class", "glyphicon glyphicon-triangle-right");

            spanEle.prop("id", "rightLogo");
        } else {
            $("#toggle-desc").animate({
                "width": "65%",
                "marginLeft": "35%"
            });

            $("#listMain").css("display", "block");

            // $("#toggle-desc").css({
            //     "width":"96%",
            //     "marginLeft":"2%"
            // });

            // $(".data-show").width(1180);

            // $(".data-show").css("width","1180px");

            $(".data-show").removeClass("unfold");

            $(this).children().prop("class", "glyphicon glyphicon-triangle-left");

            spanEle.prop("id", "leftLogo");
        }

    });

    var aHref=window.location;

    var currentUrl=aHref.href.split("/");

    var currentType=currentUrl[currentUrl.length-1],
        currentProId=currentUrl[currentUrl.length-2],   //项目id
        bruId=currentUrl[currentUrl.length-3];          //工程id

    // console.log(bruId);

    // var currentProId = localStorage.getItem("spe-proId");

    $(document).ready(function () {
        pageFn();

        violationList(1, 7);

        $("#toggle-title").find("a:eq(0)").addClass("active");

        // $("#titleMain").html(localStorage.getItem("spe-proName") + "运输总览");

        // var bruId = localStorage.getItem("bruId");

        if(currentType=="company"){
            $("#backA").attr("href", "/web/company_count/project_status/" + bruId);
        }else{
            $("#backA").css("display", "none");

            $("#projectMarTop").css("margin","45px auto 20px")
        }

    });

    var mainList = $("#toggle-list");

    function violationList(page, pageSize) {
        mainList.animate({height: '680px'});
        $("#toggle-footer").css("display", "block");

        $.post("/api/alarm_record/get_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize,
                "one_day":1
            },
            function (json) {

                violaTable(json);

                var planPageNum = Math.ceil(json.count / pageSize);

                $("#violaPage").createPage({
                    pageCount: planPageNum,
                    current: 1,
                    backFn: function (page) {
                        violaData(page, pageSize);
                    }
                });
            });
    }

    function violaData(page, pageSize) {
        $.post("/api/alarm_record/get_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize,
                "one_day":1
            },
            function (json) {
                violaTable(json);
            });
    }

    function violaTable(json) {
        var data = json.data, html = "";

        if (json.count > 0) {
            $.each(data, function (i) {
                time = data[i].alarm_time.split(" ");

                html += "<tr>" +
                    "<td style='font-size: 15px;'>" + time[0] + "<br/>" + time[1] + "</td>" +
                    "<td>" + data[i].train_name + "</td>" +
                    "<td>" + mileageShow(data[i].pos_dis) + "</td>" +
                    "<td>" + data[i].line_nickname + "</td>" +
                    "<td>" + data[i].transType + "</td>" +
                    "</tr>"
            });
        } else {
            html = "<tr><td colspan='10'>暂无信息</td></tr>"
        }

        $("#violaBody").html(html);

        testInnersFn('violaBody')
    }

    function planList(page, pageSize) {

        mainList.animate({height: '680px'});
        $("#toggle-footer").css("display", "block");

        $.post("/api/board/get_cp4_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize
            },
            function (json) {

                planTable(json);

                var planPageNum = Math.ceil(json.count / pageSize);

                $("#planPage").createPage({
                    pageCount: planPageNum,
                    current: 1,
                    backFn: function (page) {
                        planData(page, pageSize)
                    }
                });
            });
    }

    function planData(page, pageSize) {
        $.post("/api/board/get_cp4_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize
            },
            function (json) {
                planTable(json);
            });
    }

    function planTable(json){

        var data = json.data, html = "",planEle=$("#planBody");

        var wid = (planEle.width() > 1700) ? "unfold" : "";

        if (json.count > 0) {
            $.each(data, function (i) {
                switch (data[i].status) {
                    case "2":
                        color = "color:#DEC429";
                        break;
                    case "3":
                        color = "color:#E62B29";
                        break;
                    default:
                        color = "";
                }
                //修改前
                html += "<tr>" +
                    "<td style='" + color + "'>" + data[i].num + "</td>" +
                    "<td style='" + color + "'>" + data[i].train_type_name + "</td>" +
                    "<td style='" + color + "'>" + data[i].go_num + "</td>" +
                    "<td style='" + color + "'>" + data[i].back_num + "</td>" +
                    "<td><button class='ta-btn' onclick='showDesc(this," + data[i].id + ")'  \n" +
                    "\t\t\t\t  data-show-id='#show" + (i + 1) + "' id='show" + (i + 1) + "'>执行详情</button></td>" +
                    "</tr>" +
                    "<tr><td colspan='5' style='padding: 0;'><div class='data-show " + wid + "  data-show-" + (i + 1) + "' ><div><canvas id='can" + (i + 1) + "'></canvas></div></div></td></tr>"
            });

        } else {
            html = "<tr><td colspan='10'>暂无信息</td></tr>"
        }

        planEle.html(html);

        testInnersFn('planBody')
    }


    function trainList(page, pageSize) {
        // mainList.animate({height: '680px'});
        // $("#toggle-footer").css("display", "block");
        mainList.animate({height: '860px'});
        $("#toggle-footer").css("display", "none");

        $.post("/api/train/get_project_train_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize
            },
            function (json) {
                trainTable(json);
                var planPageNum = Math.ceil(json.count / pageSize);

                $("#trainPage").createPage({
                    pageCount: planPageNum,
                    current: 1,
                    backFn: function (page) {
                        trainData(page, pageSize);
                    }
                });
            });

    }

    function trainData(page, pageSize) {
        $.post("/api/train/get_project_train_list", {
                "project_id": currentProId,
                "page": page,
                "page_size": pageSize
            },
            function (json) {
                trainTable(json);
            });
    }

    function trainTable(json){

        var data = json.data, html = "";

        if (json.count > 0) {
            $.each(data, function (i) {
                switch (data[i].status) {
                    case "1":
                        color = "color:#30D561";
                        break;
                    default:
                        color = "";
                }
                html += "<tr>" +
                    "<td style='" + color + "'>" + data[i].num + "</td>" +
                    "<td style='" + color + "'>" + data[i].train_type_name + "</td>" +
                    "<td style='" + color + "'>" + data[i].is_online_name + "</td>" +
                    "<td><button class='ta-btn'>查看详情</button></td>" +
                    "</tr>"
            });
        } else {
            html = "<tr><td colspan='10'>暂无信息</td></tr>"
        }

        $("#trainBody").html(html);

        testInnersFn('trainBody');
    }

    function userList() {
        mainList.animate({height: '860px'});
        $("#toggle-footer").css("display", "none");

        var data = [
            {
                "id": 1,
                "title": "管理人员",
                "num": 92,
                "data": [{"name": "运输队队长", "num": "2"}, {"name": "书记", "num": "1"}, {
                    "name": "",
                    "num": ""
                }, {"name": "", "num": ""}]
            },
            {
                "id": 1,
                "title": "运输队",
                "num": 92,
                "data": [{"name": "运输队队长", "num": "2"}, {"name": "书记", "num": "1"}, {
                    "name": "",
                    "num": ""
                }, {"name": "", "num": ""}]
            },
            {
                "id": 1,
                "title": "机务包车队",
                "num": 92,
                "data": [{"name": "机务值班员", "num": "2"}, {"name": "司机", "num": "1"}, {
                    "name": "",
                    "num": ""
                }, {"name": "", "num": ""}]
            },
            {
                "id": 1,
                "title": "车站",
                "num": 92,
                "data": [{"name": "站长", "num": "3"}, {"name": "值班员", "num": "4"}, {
                    "name": "调车长",
                    "num": "3"
                }, {"name": "连接员", "num": "4"}]
            },
            {
                "id": 1,
                "title": "列检所",
                "num": 92,
                "data": [{"name": "工长", "num": "2"}, {"name": "检车员", "num": "1"}, {
                    "name": "车辆钳工",
                    "num": "3"
                }, {"name": "学员", "num": "4"}]
            },
            {
                "id": 1,
                "title": "检修工班",
                "num": 92,
                "data": [{"name": "工长", "num": "3"}, {"name": "电器钳工", "num": "4"}, {
                    "name": "制动钳工",
                    "num": "3"
                }, {"name": "内燃钳工", "num": "4"}]
            }
        ];

        var html = "", desc = "";

        // var json=jsonList[dataNum];
        //
        // var data=json.slice(page,pageSize);

        for (var i = 0, len = data.length; i < len; i++) {

            desc = data[i].data;

            html += "<div class='flo3'>" +
                "<div class='f-title'><span>" + data[i].title + "</span> <span class='f-title-right'>" + data[i].num + "</span><div class='middle-line'></div>" +
                "</div>";

            for (var j = 0, length = desc.length; j < length; j++) {
                html += "<p><span>" + desc[j].num + "</span><span>" + desc[j].name + "</span></p>";
            }

            html += "<button class='block-btn btn-bottom' type='button'>查看详情</button>" +
                "</div>"
        }

        $("#userBody").html(html);
    }

    function stationList() {
        // mainList.animate({height: '680px'});
        // $("#toggle-footer").css("display", "block");
        mainList.animate({height: '860px'});
        $("#toggle-footer").css("display", "none");
        $.post("/api/positioning_device/get_project_station_user/default", {
                "project_id": currentProId
            },
            function (json) {
                // console.log(json);
                var html = "";
                if (json.count > 0) {
                    var data = json.data;

                    var is_open="",station_name="";

                    $.each(data, function (i) {

                        is_open=data[i].is_open_name;

                        station_name='"'+data[i].station_name+'"';

                        // console.log(station_name);

                        if(currentType=="project" && is_open=="未开站"){
                            //stationOn is_open="<label class='onOffLabel' data-toggle='modal' data-target='#staModal'><input type='checkbox' class='btnOnOff'><span class='circle'></span></label>"
                            is_open="<em>未开站</em> <button class='btn btn-success' type='button' data-toggle='modal' data-target='#staModal' onclick='stationSet("+station_name+","+data[i].station_id+")'>开站</button>";

                        }

                        html += "<dl>" +
                            "<dt>" + data[i].station_name + "</dt>" +
                            "<dd><span>值班员：</span>" + data[i].user_name + "</dd>" +
                            "<dd><span>状态：</span>" + is_open + "</dd>" +
                            "</dl>"
                    });

                } else {
                    html = "<dl>" +
                        "<dt>暂无车站信息</dt>" +
                        "<dd></dd>" +
                        "<dd></dd>" +
                        "</dl>"
                }

                $("#stationBody").html(html);

            });
    }

    function stationSet(name,id){
        $("#stationOnName").html(name);

        $("#set_station_id").val(id);
    }

    function stationOn(id) {
        $.post("/api/station/open_station", {
                "id":$("#set_station_id").val()
            },
            function(json){
                console.log(json);
                if(json.status==0){

                    $("#sta_alert_msg").html("设置成功");

                    setTimeout(function () {

                        $("#staModal").modal("hide");

                        $("#sta_alert_msg").html("");

                        stationList();
                    },800)
                }
            });

    }

    function showDesc(that, id) {
        var current=that;
        var showId = $(that).attr("data-show-id");
        //将上一次的折叠面板高度变成0,可去掉
        // $("#planTable tr.active .data-show").animate({
        //     "height": "0px",
        //     "paddingTop": "0px",
        //     "paddingBottom": "0px"
        // }, 200);
        //判断当前点击的是否是同一个按钮
        if( $("#ids").val()!=id){
            var showIds=$("#show_btn").val(),
                ids=$("#ids").val();

            $(showIds).attr("onclick", "showDesc(this,'" + ids + "')");
        }
        //  $.data("ids",id);
        $.post("/api/board/get_cp4_by_id", {
                "id": id
            },
            function (json) {
                // console.log(json);

                var cTr = $(that).parent().parent().next();

                var ele = cTr.find(".data-show");


                cTr.addClass("active");

                cTr.siblings().removeClass("active");

                var canvas = ele.find("canvas").attr("id");

                if(refFn){
                    clearInterval(refFn);
                }


                // drawDesc(canvas,1180);

                if ((cTr.hasClass("active"))) {

                    if (json.status == 0) {

                        drawContent.drawDesc(canvas, json.data,id);

                        //切换点击事件
                        $(that).attr("onclick", "close_active(" + id + ",'" + showId + "')");

                        // var cId=canvas.toString();

                        // setInterval("planDraw("+id+","+cId+")",5000);
                    }
                }
            });
        //记录上一次点击的值
        $("#ids").val(id);
        $("#show_btn").val(showId);
    }

    var drawContent={
        colorF:"#1FBCCB",
        colorD:"#ddd",
        colorT:"#F0F746",
        backHeight:175,
        ctxXStart:105,      //第一个区间/站点开始位置
        types:0,
        drawWidth:0,
        drawHeight:0,
        lineHTop:100,
        lineHBottom:150,
        stationRectLength:280,
        stationRectHeight:140,
        stationTextX2:140,
        stationTextY1:120,
        stationTextYMore:25,
        spaceStation:120,
        sectionRectLength:135,
        sectorRectHeight:100,
        sectorRectStartY:80,
        trackLineLength:86,
        firstRectStartX:100,
        sectionLine:135+86,     //区间矩形+线 的长度
        tSectionLine:135+86,     //不改变的区间矩形+线 的长度
        endPos:1,       //0在站点  1在区间
        drawDesc:function(id, info,dataId){
            var canvas = document.getElementById(id);
            var ctx = canvas.getContext("2d");
            var data = info;

            var that=this;

            var go_step = data.go_step;
            var go_step_length = go_step.length;

            var back_step = data.back_step;
            var back_step_length = back_step.length;

            var cwLength=(back_step_length>go_step_length)?back_step_length:go_step_length;

            var lengthen = (cwLength+2)  * 322;

            this.types = (back_step_length > 0)?1:0;  //0 单程、 1往返

            var cw =  ((lengthen > 1160) ? lengthen : 1160);

            $("#" + id).parent().width(cw);
            canvas.width = cw;

            // var ch = (this.types) ? 370 : 200;
            var ch = (this.types) ? 390 : 220;

            canvas.height = ch; //height 固定

            this.drawWidth=cw;
            this.drawHeight=ch;

            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, cw, ch);

            //调整折叠面板高度
            var content=$("#planTable tr.active .data-show");
            content.css({"height": "0px"});
            content.animate({"height": (ch + 35) + "px", "padding": "15px"}, 500);

            var goTrain = data.go_train.name;
            ctx.fillStyle = this.colorD;
            ctx.font = "normal 20px Microsoft YaHei";
            ctx.fillText("施工类型：行车和施工计划", 20, 27);
            ctx.fillText("出发车辆：" + goTrain, 300, 27);

            var goTrainNum = goTrain.length + 5;
            // console.log(300 + goTrainNum * 22);
            if(this.types){ctx.fillText("返回车辆：" + data.back_train.name, 300 + goTrainNum * 22, 27);}

            ctx.fillStyle = this.colorD;
            ctx.font = "25px Microsoft YaHei";
            ctx.fillText("出", 20, 110);
            ctx.fillText("发", 20, 150);
            if(this.types){
                ctx.fillText("返", 20, 110 + this.backHeight);
                ctx.fillText("回", 20, 150 + this.backHeight);}

            this.lineDraw(ctx, 70, 40, 70, 220,2);
            this.lineDraw(ctx, 0, 40, 6000, 40);

            this.refData(ctx,data);


            refFn= setInterval(function () {
                $.post("/api/board/get_cp4_by_id", {"id": dataId},
                    function (jsonResult) {
                        that.refData(ctx,jsonResult.data);
                    });
            },100000);

        },

        dataFor:function(ctx, data, backH){

            // console.log(data);
            var info = data.process;

            var length = info.length;
            if (length == 0) {return false;}

            var lastLength=length-1;
            ctx.lineWidth = 2;

            var currentCo = "", c_status = "";

            var type=data.type;

            var ch = backH;       //返回的高度

            var start=data.start,driver="";

            var fromStatus=start[0], end=data.end;

            var endStatus=end[0];

            var textX1,trackLineX;     //线别位置

            var space = this.stationRectLength+this.trackLineLength,currentSpace;    //车站牌+线别线长度

            var lineWord=info[0].sections,linePrev=[],lineNext=[];

            if(type==0){   //出发

                var goStart=info[0].send_recv,goEng=info[lastLength].send_recv,gx1=0; //start  goEng 最后停止位置
                var goFromJudge=(goStart==0)?0:1;   //0在站点发车， 1在区间
                var judgeLength=goFromJudge*this.sectionLine;

                //开始                                      x1,y1,fontY,
                this.fromRect(ctx,goStart,fromStatus,driver,this.ctxXStart,this.sectorRectStartY,130,lineWord,0);

                //progress
                var driver_start="",station_arrive="", station_start="",
                    blockingMain="",blockingSlave;

                for (var gi = 0; gi < length; gi++) {
                    currentSpace=space*gi + judgeLength;
                    gx1=this.firstRectStartX + currentSpace;   //第一个站牌开始X
                    textX1=105 + currentSpace;
                    trackLineX=currentSpace+this.stationRectLength;
                    ctx.beginPath();

                    c_status = info[gi].step_status;

                    send_recv=info[gi].send_recv;   //0只发车 1接车和发车 2 只接车

                    currentCo = (c_status == 1 || c_status == 2) ? this.colorF : this.colorD;       //转色

                    this.rectContent(ctx,gx1,60,currentCo,info[gi].station_name);   //车站矩形

                    //中间连接线
                    lineWord=info[gi].sections;
                    if(gi==lastLength){ //最后一站
                        if(goEng!=2){   //停在区间

                            linePrev=info[gi].sections;

                            this.trackLine(ctx,type,linePrev[0].track_line_son_name,trackLineX,0,linePrev[0].arrive_is_checked);
                            this.trackLine(ctx,type,linePrev[1].track_line_son_name,trackLineX,50,linePrev[1].arrive_is_checked);
                        }
                    }else{
                        this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX,0,lineWord[0].is_checked);
                        this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX,50,lineWord[1].is_checked);
                    }

                    //司机、值班员 状态
                    ctx.font = "16px Microsoft YaHei";
                    ctx.textAlign = 'left';
                    driver_start=info[gi].driver_start_ok_name;station_arrive=info[gi].station_arrive_ok_name; station_start=info[gi].station_start_ok_name;
                    blockingMain=info[gi].section_main.station_status;blockingSlave=info[gi].section_slave.station_status;
                    if(send_recv==1){       //接车+发车
                        this.stationContent(ctx,station_arrive,driver_start,blockingMain,textX1,this.stationTextY1,currentCo);

                        this.stationContent(ctx,station_start,driver_start,blockingSlave,textX1+this.stationTextX2,this.stationTextY1,currentCo);

                    }else if(send_recv==0){     //只发车
                        if(gi===0){driver_start=(driver_start=="未确认")?"未发车":"已发车";}

                        this.stationContent(ctx,station_start,driver_start,blockingMain,textX1+this.stationTextX2,this.stationTextY1,currentCo);

                    }else if(send_recv==2){     //只接车
                        if(gi===lastLength){driver_start=(driver_start=="未确认")?"未到达":"已到达";}

                        this.stationContent(ctx,station_arrive,driver_start,blockingSlave,textX1,this.stationTextY1,currentCo);
                    }
                }

                //终点                                   //x1,y1,fontY
                this.endRect(ctx,goEng,endStatus,driver,15+space *length+judgeLength+this.trackLineLength,this.sectorRectStartY,130);

            }else{      //返回

                var backStart=info[lastLength].send_recv,backEng=info[0].send_recv; //start

                var backStationTextY1=this.stationTextY1+ ch;

                var bx1=0,b_endPos=(backEng==2)?0:1;    //过程开始X位置、endPos终点在站点0 在区间1

                var sectorBackX=length*space,sectorNone=b_endPos*this.sectionLine;  //sectorNone 在区间就是rect+line 不在0

                var b_driver_start ="", b_station_arrive="", b_station_start="",
                    b_blockingMain="",b_blockingSlave;

                //progress
                for (var bi = 0; bi < length; bi++) {
                    currentSpace=space * bi+sectorNone;
                    bx1=this.firstRectStartX + currentSpace;   //站牌开始X
                    textX1=this.ctxXStart + currentSpace;
                    trackLineX=currentSpace-this.trackLineLength+3;
                    ctx.beginPath();

                    c_status = info[bi].step_status;

                    send_recv=info[bi].send_recv;

                    currentCo = (c_status == 3 ) ? this.colorD : this.colorF;       //转色

                    this.rectContent(ctx,bx1,60+ch,currentCo,info[bi].station_name,this.backHeight);    //车站矩形

                    //中间连接线
                    lineWord=info[bi].sections;
                    lineNext=info[lastLength].sections;
                    // console.log(lastLength);
                    if(lastLength===0){     //只有1个站的情况

                        if(backStart==0){   //站到区间
                            this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX+3,ch,lineWord[0].arrive_is_checked);
                            this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX+3,50+ch,lineWord[1].arrive_is_checked);
                        }else if(backStart==1){     //区-站-区

                            this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX,ch,lineWord[0].start_is_checked);
                            this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX,50+ch,lineWord[1].start_is_checked);

                            this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX+space,ch,lineWord[0].arrive_is_checked);
                            this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX+space,50+ch,lineWord[1].arrive_is_checked);
                            if (fromStatus) {
                                currentCo = this.colorF;
                                driver = "司机：已发车";
                            } else {
                                currentCo = this.colorD;
                                driver = "司机：未发车";
                            }
                            ctx.fillStyle = currentCo;
                            var lastRX=sectorBackX+this.ctxXStart+b_endPos*this.sectionLine-5;
                            ctx.font = "17px Microsoft YaHei";
                            ctx.textAlign = 'center';
                            ctx.fillText(driver, lastRX+this.sectionRectLength/2, 130+ch);
                            ctx.strokeStyle = currentCo;
                            ctx.strokeRect(lastRX, 80+ch, this.sectionRectLength, this.sectorRectHeight);

                        }else{      //2     区-站
                            this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX+space,ch,lineWord[0].start_is_checked);
                            this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX+space,50+ch,lineWord[1].start_is_checked);
                            if (fromStatus) {
                                currentCo = this.colorF;
                                driver = "司机：已发车";
                            } else {
                                currentCo = this.colorD;
                                driver = "司机：未发车";
                            }
                            ctx.fillStyle = currentCo;
                            var lastRX=sectorBackX+this.ctxXStart+b_endPos*this.sectionLine-5;
                            ctx.font = "17px Microsoft YaHei";
                            ctx.textAlign = 'center';
                            ctx.fillText(driver, lastRX+this.sectionRectLength/2, 130+ch);
                            ctx.strokeStyle = currentCo;
                            ctx.strokeRect(lastRX, 80+ch, this.sectionRectLength, this.sectorRectHeight);
                        }
                    }else{
                        if(bi==0 && backEng==2){
                            //返回的最后一站、只接车

                        }else if(bi==lastLength){       //返回的第一站处理

                            if(backStart!=2){   //第一个站到第二个站有发车需求的  区间就从第二个站获取

                                this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX,ch,lineWord[0].start_is_checked);
                                this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX,50+ch,lineWord[1].start_is_checked);

                            }
                            if(backStart!=0){  //有接车需求的是区间到站点
                                // console.log(987);
                                this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX+space,ch,lineWord[0].start_is_checked);
                                this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX+space,50+ch,lineWord[1].start_is_checked);

                                if (fromStatus) {
                                    currentCo = this.colorF;
                                    driver = "司机：已发车";
                                } else {
                                    currentCo = this.colorD;
                                    driver = "司机：未发车";
                                }
                                ctx.fillStyle = currentCo;
                                var lastRX=sectorBackX+this.ctxXStart+b_endPos*this.sectionLine-5;
                                ctx.font = "17px Microsoft YaHei";
                                ctx.textAlign = 'center';
                                ctx.fillText(driver, lastRX+this.sectionRectLength/2, 130+ch);
                                ctx.strokeStyle = currentCo;
                                ctx.strokeRect(lastRX, 80+ch, this.sectionRectLength, this.sectorRectHeight);
                            }
                        }else{

                            this.trackLine(ctx,type,lineWord[0].track_line_son_name,trackLineX,ch,lineWord[0].is_checked);
                            this.trackLine(ctx,type,lineWord[1].track_line_son_name,trackLineX,50+ch,lineWord[1].is_checked);
                        }
                    }


                    b_driver_start =info[bi].driver_start_ok_name;
                    b_station_arrive=info[bi].station_arrive_ok_name;
                    b_station_start=info[bi].station_start_ok_name;
                    b_blockingMain=info[bi].section_main.station_status;b_blockingSlave=info[bi].section_slave.station_status;
                    currentCo = (c_status == 3 ) ? this.colorD : this.colorF;       //转色
                    ctx.font = "15px Microsoft YaHei";
                    ctx.fillStyle = currentCo;
                    ctx.textAlign = 'left';

                    if(send_recv==1){       //接车+发车

                        this.stationContent(ctx,b_station_arrive,b_driver_start,b_blockingMain,textX1+this.stationTextX2,backStationTextY1,currentCo);

                        this.stationContent(ctx,b_station_start,b_driver_start,b_blockingSlave,textX1,backStationTextY1,currentCo);

                    }else if(send_recv==0){     //只发车
                        if(bi===lastLength){b_driver_start=(b_driver_start=="未确认")?"未发车":"已发车";}

                        this.stationContent(ctx,b_station_start,b_driver_start,b_blockingMain,textX1,backStationTextY1,currentCo);
                    }else if(send_recv==2){       //只接车
                        if(bi===0){b_driver_start=(b_driver_start=="未确认")?"未到达":"已到达";}

                        this.stationContent(ctx,b_station_arrive,b_driver_start,b_blockingSlave,textX1+this.stationTextX2,backStationTextY1,currentCo);
                    }
                }

                this.endRect(ctx,backEng,fromStatus,driver,this.ctxXStart,this.sectorRectStartY+ch,130+ch);
            }

        },
        stationContent:function(ctx,name1,name2,name3,x,y,color){
            ctx.fillStyle =color;
            ctx.fillText("值班员：" + name1, x, y);
            ctx.fillText("司机：" + name2, x, y+this.stationTextYMore);

            if(name3=="闭塞"){ctx.fillStyle = "#FC9515";}
            ctx.fillText("值班员：" + name3, x, y+this.stationTextYMore*2);
        },

        lineDraw:function(ctx, x1, y1, x2, y2, lw, lc){
            ctx.beginPath();
            var lh = lw || 1;
            var color = lc || this.colorD;
            // var color = lc ;
            ctx.lineWidth = lh;
            ctx.strokeStyle = color;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        },

        drawDashRound:function(ctx,x, y,color,type){
            var count=13;   //线长
            var x1=0;
            ctx.strokeStyle=color;
            for(var i=0;i<count;i++){
                ctx.beginPath();
                ctx.arc(x+(i*6),y,0.5,0,360*Math.PI/180);
                ctx.closePath();
                ctx.stroke();
                x1=x+(i*6);
            }

            if(type){   //箭头 1：+返
                x1-=62;
                this.lineDraw(ctx,x1-7,y-6,x1-15,y,2,color);
                this.lineDraw(ctx,x1-15,y,x1-7,y+6,2,color);
            }else{  // 0：出
                // console.log("箭头",color);
                this.lineDraw(ctx,x1,y-6,x1+8,y,2,color);
                this.lineDraw(ctx,x1+8,y,x1,y+6,2,color);
            }
        },

        refData:function (ctx,result) {
            ctx.clearRect(80, 50, this.drawWidth, this.drawHeight);

            var data=result;

            var go_data={"start":[data.driver_start,data.go_track_line_name],"process":data.go_step,"end":[data.driver_arrive],"type":0};

            this.dataFor(ctx, go_data, 0);

            if (this.types === 1) {
                this.lineDraw(ctx, 0, 220, 3000, 220);

                this.lineDraw(ctx, 70, 201, 70, 400,2);

                //start0 始发状态，1始发线名，2是否从车站始发
                var back_data={"start":[data.back_driver_start,data.back_track_line_name],"process":data.back_step,"end":[data.back_driver_arrive],"type":1};
                this.dataFor(ctx, back_data, this.backHeight);
            }
        },

        trackLine:function (ctx,type,text,lengthen,heighten,is_check) {
            //轨道线
            // var normalColor=color || this.colorD;
            var normalColor=(is_check)?this.colorT : this.colorD;

            ctx.font = "15px Microsoft YaHei";
            ctx.textAlign = 'center';
            ctx.fillStyle = normalColor;
            this.drawDashRound(ctx,this.ctxXStart+lengthen, this.lineHTop+heighten,normalColor,type);
            ctx.fillText(text,this.ctxXStart+lengthen+35, 90+heighten);
        },
        rectContent:function (ctx,rx,ry,color,station_name,ch) {
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            var backH = ch || 0,lineH=40;   //返回距离出发的高度， 站牌下线的搞得

            ctx.strokeRect(rx, ry, this.stationRectLength, this.stationRectHeight);
            this.lineDraw(ctx, rx, ry+lineH, rx+this.stationRectLength, ry+lineH, 2, color);   //方块分割线
            ctx.textAlign = 'center';
            ctx.font = "17px Microsoft YaHei";
            ctx.fillText(station_name, 146 + rx, 86+backH);

            var halfRect=this.stationRectLength/2;
            this.lineDraw(ctx, rx+halfRect, ry+lineH, rx+halfRect, ry+lineH+99, 2, color);   //方块分割线
        },
        endRect:function (ctx,end,endStatus,driver,x1,y1,fontY) {
            var color="";

            if(end!=2){   //最后停在区间
                // console.log(y1+ " 终点在区间");
                if(endStatus){
                    driver="司机：已到达";
                    color=this.colorF;
                }else{
                    driver="司机：未到达";
                    color=this.colorD;
                }

                this.endPos=1;

                ctx.font = "17px Microsoft YaHei";
                ctx.textAlign = 'center';
                ctx.strokeStyle = color;
                ctx.strokeRect(x1, y1, this.sectionRectLength, this.sectorRectHeight);
                ctx.fillStyle = color;
                ctx.fillText(driver, x1+ this.sectionRectLength/2, fontY);

            }else{
                // console.log("终点不在区间");
                this.endPos=0;
            }
        },
        fromRect:function (ctx,goStart,fromStatus,driver,x1,y1,fontY,line,type) {
            var currentCo=this.colorD;

            var trackLine=line;
            // console.log(goStart);

            if(goStart==0){ //当前在站点
                // this.sectionLine=0;
                // console.log("在站点 "+y1);
            }else{   // 在区间
                // this.sectionLine=this.sectionRectLength+this.trackLineLength;
                if(fromStatus){
                    currentCo=this.colorF;
                    driver="司机：已发车";
                }else{
                    currentCo=this.colorD;
                    driver="司机：未发车";
                }

                ctx.font = "17px Microsoft YaHei";
                ctx.textAlign = 'center';
                ctx.fillStyle = currentCo;
                ctx.fillText(driver, x1+ this.sectionRectLength/2, fontY);
                ctx.strokeStyle = currentCo;
                ctx.strokeRect(x1 , y1,this.sectionRectLength, this.sectorRectHeight);

                var is_check0=trackLine[0].start_is_checked || trackLine[0].is_checked,
                    is_check1=trackLine[1].start_is_checked || trackLine[1].is_checked;
                this.trackLine(ctx,type,trackLine[0].track_line_son_name,this.sectionRectLength,0,is_check0);
                this.trackLine(ctx,type,trackLine[1].track_line_son_name,this.sectionRectLength,50,is_check1);


                //    if(type>0){
                //        var BX1=type+this.sectionRectLength+4;
                // console.log("bx "+BX1);   //ctx,type,    text,                   lengthen,heighten,is_check
                //        this.trackLine(ctx,type,333,BX1,y1-80,trackLine[0].is_checked);
                //        this.trackLine(ctx,type,333,BX1,y1-30,trackLine[1].is_checked);
                //        // this.trackLine(ctx,type,trackLine[0].track_line_son_name,BX1,y1-80,trackLine[0].is_checked);
                //        // this.trackLine(ctx,type,trackLine[1].track_line_son_name,BX1,y1-30,trackLine[1].is_checked);
                //    }else{
                //        this.trackLine(ctx,type,trackLine[0].track_line_son_name,this.sectionRectLength,0,trackLine[0].is_checked);
                //        this.trackLine(ctx,type,trackLine[1].track_line_son_name,this.sectionRectLength,50,trackLine[1].is_checked);
                //    }

            }
        }
    };

    //    计划总览数据折叠控制
    function close_active(id, showId) {
        //判断二次点击是否含有uclose类名
        if ($(showId).is(".uclose")) {
            //切换点击事件
            $(showId).attr("onclick", "showDesc(this," + id + ")").click();
            $(showId).removeClass("uclose");
            return false;
        }else{
            // console.log(111111);
            clearInterval(refFn);
            //调整折叠面板高度
            $("#planTable tr.active .data-show").animate({
                "height": "0px",
                "paddingTop": "0px",
                "paddingBottom": "0px"
            }, 500, function () {
                $(showId).addClass("uclose");
            });
        }
    }
</script>
</body>
</html>