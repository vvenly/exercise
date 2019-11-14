var em=1;
window.bW=6;  //borderWidth
window.dataCanvas=$("#d3");window.bodyDiv=$("html");

window.marTop=50;
window.marLeft=100;
window.c_radius=15;

window.checkType=2;//线别选择, 默认选择上行线

var planData1=[
    {"pixX1": "466",  "pixY1": "110.24","xz":0},
    {"pixX1": "628", "pixY1": "420.00","xz":0},
    {"pixX1": "198.94","pixY1": "462.69","xz":0},
    {"pixX1": "758","pixY1": "264.64","xz":0},
    {"pixX1": "990","pixY1": "630.00","xz":0},
    {"pixX1": "60","pixY1": "50","xz":0},
    {"pixX1": "90","pixY1": "110","xz":0},
    {"pixX1": "300","pixY1": "200","xz":0},
    {"pixX1": "400","pixY1": "230.00","xz":0},
    {"pixX1": "590","pixY1": "330.00","xz":0},
];

window.lineData=[
        {"id":1,"trackLineName":"十一号线下行线","prefix":"DK","startMil":0,"endMil":0},
        // {"id":2,"trackLineName":"十一号线上行线","prefix":"DK","startMil":0,"endMil":51517,"trackLineId":"707751503fa34e119c3948fa06a7099c","lengthPix":5151.7}
    ];

function timeSet() {
    var data3 = new Date();

    var y=data3.getFullYear(),
        month=data3.getMonth() + 1,
        m=month<10 ? "0"+month : month,
        d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate();

    var time=y + "-" +m + "-" +d;

    $("#timeKey").val(time);
}
timeSet();

function arrSort(arr){
    var length=arr.length;

    var x1,x2,y1,y2;
    var width1=0,height1=0,sum1=0;

    var nx1,nx2,ny1,ny2;
    var width2=0,height2=0,sum2=0;

    for(var i=0; i<length; i++){
        arr[i].xz=0;
        if(i===length-1){break;}
        for(var j=i; j<length;j++){

            data1=arr[i];data2=arr[j];

            x1=(data1.pixX1<0)?0:data1.pixX1;
            x2=(data1.pixX2>1584)?1584:data1.pixX2;
            y1=data1.pixY1;
            y2=data1.pixY2;
            width1=x2-x1;
            height1=y2-y1;
            sum1=width1*height1;


            nx1=(data2.pixX1<0)?0:data2.pixX1;
            nx2=(data2.pixX2>1584)?1584:data2.pixX2;
            ny1=data2.pixY1;
            ny2=data2.pixY2;
            width2=nx2-nx1;
            height2=ny2-ny1;
            sum2=width2*height2;

            if(sum1>sum2){
                min=arr[j];
                arr[j]=arr[i];
                arr[i]=min;
            }
        }
    }
    return arr

}


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


    if(num<0){
        return "DK -"+km+"+"+meter;
    }else{
        return "DK"+km+"+"+meter;
    }

};

function timeFmt(v) {
    var timeN=v.substring(5,10)+" "+v.substring(11,16);

    return timeN;
}


var seli = -1;
var dx=0,dy=0;

var c_status=0;     //鼠标按下 1  抬起 0

// var divStatus=true;

window.sub_data=[]; //修改后要传输的数据

// window.changeRect=false;

function SelectedShape(ctx, x, y,gapX,gapY) {
    // console.log(y);
    var plan=planData1;

    var brushCtx=drawMain.canM;



    // console.log(plan.length);
    // arrSort(planData1);

    if(plan[seli]){
        // console.log(plan[seli]);

        if(seli !== -1){plan[seli].xz = 0;}
    }

    var x1=0,y1=0;

    // var change=0;
    var distance=0;
    for(var i=0;i<plan.length;i++) {
        x1=Number(plan[i].pixX1);
        y1=Number(plan[i].pixY1);

        // console.log("x1 : "+x1);
        // console.log("x : "+x);

        distance = (Math.abs(Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2)))).toFixed(2);

        if(distance <= 15){



            var xGap=gapX,yGap=gapY;

            seli = i;

            var nx1=0,ny1=0;
            plan[i].xz = 1;

            var cpl=plan[i];        //重新排
            // console.log(cpl);

            drawMain.drawData();

            // d3mouse(1);
            dx=x-x1;
            dy=y-y1;

            var nx=0,ny=0;

            brushCtx.onmousemove = function(e){

                // c_status = 1;

                nx1= e.clientX-xGap;ny1=e.clientY-yGap;

                var yn=ny1-dy;

                var height=$("#dataCtx").height()-c_radius;

                nx=nx1-dx;

                ny=(yn>=0)?yn:0;

                cpl.pixX1=nx;

                cpl.pixY1=(ny>=height)?height:ny;

                // console.log(height);

                drawMain.drawData();

            };

            brushCtx.onmouseup = function(){
                c_status = 0;

                brushCtx.onmousemove = null;
                brushCtx.onmouseup = null;
            };

            // if(changeRect){
            // $("#subBtn").prop("disabled",false);
            // }
            // else{
            //     $("#subBtn").prop("disabled",false);
            // }
            return;
        }
        else{
            plan[i].xz = 0;
            seli = -1;

            c_status = 0;

            // $("#myModal-info").css("display","none");

            if(i===plan.length-1){
                // console.log(110);
                drawMain.drawData();
                brushCtx.onmousemove = null;
            }
        }
    }
}

$("#dataCtx").mouseleave(function () {
    drawMain.canM.onmousemove = null;
    drawMain.canM.onmouseup = null;
});


// function d3mouse(type){
//     if(type){
//         dataCanvas.mousemove(function(ev){
//             var e=ev || window.event;
//
//             var xGap=marTop-dataCanvas.scrollLeft()-bodyDiv.scrollLeft(),yGap=marLeft-dataCanvas.scrollTop()-bodyDiv.scrollTop();
//             cx= e.clientX-xGap;cy=e.clientY-yGap;
//
//             var currentX1=drawMain.cursorX1,currentY1=drawMain.cursorY1,currentX2=drawMain.cursorX2,currentY2=drawMain.cursorY2;
//
//             // console.log(currentY1);
//
//             if(cy<currentY1+bW && cy>currentY1  && cx>currentX1+bW  && cx<currentX2-bW){        //上
//
//                 dataCanvas.css("cursor",'n-resize');
//
//             }else if(cy>currentY2-bW && cy<currentY2  && cx>currentX1+bW  && cx<currentX2-bW){     //下
//                 // console.log(222);
//                 $("#d3").css("cursor",'n-resize');
//             }else if(cx<currentX1+bW && cx>currentX1  && cy>currentY1+bW  && cy<currentY2-bW){    //左
//                 // console.log(333);
//                 $("#d3").css("cursor",'e-resize');
//             }else if(cx<currentX2 && cx>currentX2-bW  && cy>currentY1+bW  && cy<currentY2-bW){       //右
//                 // console.log(444);
//                 $("#d3").css("cursor",'e-resize');
//             }
//             else if(cx<currentX2 && cx>currentX2-bW  && cy>currentY2-bW  && cy<currentY2){       //右下
//                 // console.log(555);
//                 $("#d3").css("cursor",'nw-resize');
//             }
//             else if(cx<currentX2 && cx>currentX2-bW  && cy>currentY1  && cy<currentY1+bW){    //右上  ok
//                 // console.log(666);
//                 $("#d3").css("cursor",'ne-resize');
//             }
//
//             else if(cx<currentX1+bW && cx>currentX1  && cy>currentY1  && cy<currentY1+bW){    //左上  ok
//                 // console.log(777);
//                 $("#d3").css("cursor",'nw-resize');
//             }
//             else if(cx<currentX1+bW && cx>currentX1  && cy>currentY2-bW  && cy<currentY2){       //左下 ok
//                 // console.log(888);
//                 $("#d3").css("cursor",'ne-resize');
//             }
//             else if(cx>currentX1+bW && cx<currentX2-bW  && cy>currentY1+bW  && cy<currentY2-bW){        //移动
//                 $("#d3").css("cursor",'move');
//             }
//             else{
//                 if(c_status === 0){
//                     $("#d3").css("cursor",'default');
//                 }
//             }
//         });
//     }
// }

