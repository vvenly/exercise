
var planData1=[
    {"id":1, "spacetime":[
            //从19点 开始 工作 2小时  从宁县车站 到 庆阳车站
            {"time_fx":66,"time_ex":130+196,"from_x":110.24,"end_x":264.64, "xz":0},

            //从20点 开始 工作 2小时  从庆阳车站 到 庆城车站
            {"time_fx":198,"time_ex":130+198,"from_x":264.64,"end_x":462.69, "xz":0},

            //从2点 开始 工作 1小时  从宁县车站区间 到 庆城车站
            {"time_fx":528,"time_ex":195+528,"from_x":130,"end_x":420, "xz":0}
        ]},{"id":2, "spacetime":[

            {"time_fx":858,"time_ex":130+858,"from_x":110.24,"end_x":264.64, "xz":0},

            {"time_fx":858+132,"time_ex":130+858+132,"from_x":264.64,"end_x":462.69, "xz":0},

            {"time_fx":990,"time_ex":1090,"from_x":530,"end_x":630, "xz":0}
        ]},
    {"id":3, "spacetime":[

            {"time_fx":210,"time_ex":130+210,"from_x":564.64,"end_x":762.69, "xz":0},

            //从2点 开始 工作 1小时  从宁县车站区间 到 庆城车站
            {"time_fx":548,"time_ex":195+548,"from_x":530,"end_x":820, "xz":0}


        ]},
    {"id":4, "spacetime":[

            {"time_fx":210,"time_ex":130+210,"from_x":964.64,"end_x":1262.69, "xz":0},

            //从2点 开始 工作 1小时  从宁县车站区间 到 庆城车站
            {"time_fx":548,"time_ex":195+548,"from_x":1030,"end_x":1420, "xz":0}


        ]}
];



var stationData={
    "code":0,
    "data":[
        {"id": 4, "stationName": "福田A", "centerMil": 291, "centerPix": 129.1},
        {"id": 6, "stationName": "车公庙A", "centerMil": 3135.7, "centerPix": 313.57},
        {"id": 8, "stationName": "车红区间所A", "centerMil": 6124, "centerPix": 412.4},
        {"id": 11, "stationName": "红树湾南A", "centerMil": 9035.761, "centerPix": 603.5761},
        {"id": 12, "stationName": "后海A", "centerMil": 12411, "centerPix": 741.1},
        {"id": 15, "stationName": "南山A", "centerMil": 14457.4, "centerPix": 845.74},
        {"id": 16, "stationName": "南前区间所A", "centerMil": 17021, "centerPix": 902.1},
        {"id": 18, "stationName": "前海湾A", "centerMil": 18329.6, "centerPix": 1132.96},
        {"id": 20, "stationName": "宝安A", "centerMil": 21127, "centerPix": 1212.7},
        {"id": 22, "stationName": "碧海湾A", "centerMil": 24457, "centerPix": 1445.7},
        {"id": 25, "stationName": "碧机A区间所", "centerMil": 27050, "centerPix": 1505},
        {"id":46,"stationName":"松岗","centerMil":49325,"centerPix":1650.5},
        {"id": 29, "stationName": "碧机B区间所", "centerMil": 29750, "centerPix": 1875},
        {"id":31,"stationName":"机场A","centerMil":31698.02,"centerPix":1969.802},
        {"id":32,"stationName":"机场北A","centerMil":34692,"centerPix":2069.2},
        {"id":34,"stationName":"福永A","centerMil":37653,"centerPix":2265.3},
        {"id":36,"stationName":"桥头A","centerMil":39389.43,"centerPix":2338.943},
        {"id":38,"stationName":"塘尾A","centerMil":41110.38,"centerPix":2411.038},
        {"id":40,"stationName":"马安山A","centerMil":42841,"centerPix":2584.1},
        {"id":42,"stationName":"沙井A","centerMil":44569.53,"centerPix":2656.953},
        {"id":45,"stationName":"后亭A","centerMil":47007,"centerPix":2760.7},
        {"id":49,"stationName":"碧头A","centerMil":51266,"centerPix":2855.6}
    ]
}

var lineData={
    "code": 0,
    "data": [
        {"id":1,"trackLineName":"十一号线下行线","prefix":"DK","startMil":0,"endMil":51517,"trackLineId":"44523b4a4a774e11bf35e6ddc8a0b885","lengthPix":5151.7},
        {"id":2,"trackLineName":"十一号线上行线","prefix":"DK","startMil":0,"endMil":51517,"trackLineId":"707751503fa34e119c3948fa06a7099c","lengthPix":5151.7}
    ],
    "message": "success"
};


window.mileageShow=function (num) {

    var currentNum=(num>=0)?num: Math.abs(num);

    var pointNum=currentNum%1000;
    var pointLength=pointNum.toString().split(".").length;

    var meter, km;

    meter=(pointLength>=2)?pointNum.toFixed(2):pointNum;km=Math.floor(currentNum/1000);

    if( meter>=10 && meter<100){
        meter="0"+meter;
    }else if(meter<10){
        meter="00"+meter;
    }

    // if(num==0) {
    //     return "暂无"
    // }else
    if(num<0){
        return "DK - "+km+"+"+meter;
    }else{
        return "DK "+km+"+"+meter;
    }

};

window.dataCanvas=$("#d3");window.bodyDiv=$("html");

var em=1;
var bW=6;  //borderWidth
function zoomMode(type) {  //缩放，控制body 的 zoom;
    if(type){
        em+=0.02;
        // $("body").css("zoom",em);
    }else{
        em-=0.02;
    }

    // $("#cnsBor").css("zoom",em);
    $("body").css("zoom",em);
}

var seli = -1;
var selj = -1;

var dx=0,dy=0;
function SelectedShape(ctx, x, y,gapX,gapY) {

    // console.log(y);
    var plan=planData1;

    var brushCtx=drawMain.canM;

    var x1,x2,y1,y2;

    var minWidth=15;    //最小宽高，伸缩不能小于0

    var parent=$("#d3");

    var scrollX=parent.scrollLeft(),scrollY=parent.scrollTop();

    // var xGap=gapX-scrollX,yGap=gapY-scrollY;
    var xGap=gapX,yGap=gapY;

    var nx1=0,ny1=0,cx=0,cy=0;
    if(seli !== -1){
        plan[seli].spacetime[selj].xz = 0;
    }
    for(var i=0;i<plan.length;i++) {
        for (var j = 0; j < plan[i].spacetime.length; j++) {
            // console.log(plan[i].spacetime[j].time_fx);

            x1=plan[i].spacetime[j].time_fx; x2=plan[i].spacetime[j].time_ex;
            y1=plan[i].spacetime[j].from_x;  y2=plan[i].spacetime[j].end_x;
            // console.log(y);
            if(x > x1 && x < x2 && y > y1 && y < y2){

                // drawMain.cursorX1=x1;
                // drawMain.cursorY1=y1;
                // drawMain.cursorX2=x2;
                // drawMain.cursorY2=y2;

                // parent.css("cursor",'pointer');

                // $("#dataCtx").css("cursor",'pointer');
                plan[i].spacetime[j].xz = 1;
                seli = i;
                selj = j;

                drawMain.drawData();

                dx=x-x1;
                dy=y-y1;

                if(x>=x2-bW ){   //右
                    brushCtx.onmousemove = function(e){
                        nx1= e.clientX-xGap;ny1=e.clientY-yGap;
                        plan[i].spacetime[j].time_ex=(nx1<=x1+minWidth)?x1+minWidth:nx1;
                        drawMain.drawData();

                    };

                }else if(x<=x1+bW){  //左
                    brushCtx.onmousemove = function(e){
                        nx1= e.clientX-xGap;ny1=e.clientY-yGap;
                        plan[i].spacetime[j].time_fx=(nx1>=x2-minWidth)?x2-minWidth:nx1;
                        drawMain.drawData();

                    };
                }
                else if(y<=y1+bW){   //上
                    brushCtx.onmousemove = function(e){
                        nx1= e.clientX-xGap;ny1=e.clientY-yGap;
                        plan[i].spacetime[j].from_x=(ny1+minWidth<=y2)?ny1:y2-minWidth;
                        drawMain.drawData();

                    };
                }
                else if(y>=y2-bW){       //下
                    brushCtx.onmousemove = function(e){
                        nx1= e.clientX-xGap;ny1=e.clientY-yGap;
                        plan[i].spacetime[j].end_x=(ny1-minWidth>=y1)?ny1:y1+minWidth;
                        drawMain.drawData();
                    };
                }
                else{
                    brushCtx.onmousemove = function(e){
                        var zx= e.clientX-gapX+scrollX;zy=e.clientY-gapY+scrollY;
                        newDraw(ctx,zx,zy);
                    };
                }

                brushCtx.onmouseup = function(){
                    brushCtx.onmousemove = null;
                    brushCtx.onmouseup = null;
                };

                // $("#dataCtx").mouseleave(function () {
                //     brushCtx.onmousemove = null;
                // });

                return;
            }else{


                plan[i].spacetime[j].xz = 0;
                seli = -1;
                selj = -1;
                drawMain.drawData();
                // console.log(111);
                // brushCtx.onmouseup=function(){
                //     $("#dataCtx").css("cursor",'default');
                // }
            }
        }
    }
}

function newDraw(mtx,x,y) {
    var plan=planData1;

    var nx=0,ny=0;

    for(var i=0;i<plan.length;i++) {
        for (var j = 0; j < plan[i].spacetime.length; j++) {

            if(plan[i].spacetime[j].xz == 1){
                // if(y==plan[i].spacetime[j].end_x){
                //     drawMain.lineDraw(mtx,plan[i].spacetime[j].end_x,plan[i].spacetime[j].from_x,plan[i].spacetime[j].end_x,plan[i].spacetime[j].end_x,2,"#f00");
                // }else{
                nx=x-dx;
                ny=y-dy;

                var x2=plan[i].spacetime[j].time_ex-plan[i].spacetime[j].time_fx;
                var y2=plan[i].spacetime[j].end_x-plan[i].spacetime[j].from_x;

                plan[i].spacetime[j].time_fx=nx;
                plan[i].spacetime[j].time_ex=x2+nx;
                plan[i].spacetime[j].from_x=ny;

                plan[i].spacetime[j].end_x=y2+ny;
                // }

            }

            drawMain.drawData();
        }
    }
}


function d3Move(ev){
    var e=ev || window.event;
    // console.log(window.event);
    var xGap=235-dataCanvas.scrollLeft()-bodyDiv.scrollLeft(),yGap=131-dataCanvas.scrollTop()-bodyDiv.scrollTop();
    cx= e.clientX-xGap;cy=e.clientY-yGap;
    // console.log(drawMain.tty);
    var currentX1=drawMain.cursorX1,currentY1=drawMain.cursorY1,currentX2=drawMain.cursorX2,currentY2=drawMain.cursorY2;
    // console.log(cy+" - "+currentY2);

    // console.log(currentX1);
    if(cy<=currentY1+bW && cy>currentY1  && cx>=currentX1  && cx<=currentX2){
        $("#d3").css("cursor",'n-resize');
    }else if(cy>=currentY2-bW && cy<currentY2  && cx>=currentX1  && cx<=currentX2){
        $("#d3").css("cursor",'n-resize');
    }else if(cx<=currentX1+bW && cx>currentX1  && cy>=currentY1  && cy<=currentY2){
        $("#d3").css("cursor",'e-resize');
    }else if(cx>=currentX2-bW && cx<currentX2  && cy>=currentY1  && cy<=currentY2){
        $("#d3").css("cursor",'e-resize');
    }else if(cx>currentX1+bW && cx<currentX2-bW  && cy>currentY1+bW  && cy<currentY2-bW){
        $("#d3").css("cursor",'move');
    }else{
        $("#d3").css("cursor",'default');
    }
}