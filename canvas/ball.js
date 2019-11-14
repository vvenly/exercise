function Ball(x,y,radius,color){
    //定义圆形中心的X,Y坐标 ，默认为0,半径默认为12,颜色默认为#1F93E8;
    this.x=x || 0;
    this.y=y || 0;

    this.radius= radius || 12;

    this.color=color || "#1F93E8";

    this.scaleX=1;
    this.scaleY=1;

}

Ball.prototype={
    stroke:function (ctx) {   //描边圆
        ctx.save();
        ctx.scale(this.scaleX,this.scaleY);
        ctx.strokeStyle=this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,360*Math.PI/180,false);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    },
    fill:function (ctx) {   //填充圆
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotation);
        ctx.scale(this.scaleX,this.scaleY);
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.arc(0,0,this.radius,0,360*Math.PI/180,false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    },
    checkMouse:function (mouse) { //略有误差，待改进
        let dx=mouse.x - this.x;
        let dy=mouse.y - this.y;
        let distance=Math.sqrt(dx*dy+ dy * dy);

       // console.log("distance : "+distance  + "radius : "+this.radius);

        if(distance < this.radius){
            return true;
        }else{
            return false;
        }
    },
    getRect:function(){
        let rect={
            x:this.x - this.radius,
            y:this.y - this.radius,
            width:this.radius*2,
            height:this.radius*2
        };
        return rect;

    }
}
;