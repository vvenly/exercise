//定义格子类型
function Cell(r,c,src){
  this.r=r; this.c=c; this.src=src;
}
//定义所有图形的抽象父类型Shape
function Shape(
  r0,c0,r1,c1,r2,c2,r3,c3,src,states,orgi){
  this.cells=[//每种图形都包含4个格子
    new Cell(r0,c0,src),new Cell(r1,c1,src),
    new Cell(r2,c2,src),new Cell(r3,c3,src),];
  this.states=states;//保存图形的所有旋转状态
  //根据指定的参照格下标，获得参照格对象
  this.orgCell=this.cells[orgi];
  this.statei=0;//保存现在正在使用的状态序号
}
Shape.prototype={
  moveDown(){
    //遍历当前图形的cells
    for(var i=0;i<this.cells.length;i++)
      //将当前图形的当前格的r+1
      this.cells[i].r++;
  },
  moveLeft(){
    //遍历当前图形的cells
    for(var i=0;i<this.cells.length;i++)
      //将当前图形的当前格的c-1
      this.cells[i].c--;
  },
  moveRight(){
    //遍历当前图形的cells
    for(var i=0;i<this.cells.length;i++)
      //将当前图形的当前格的c+1
      this.cells[i].c++;
  },
  rotateL(){
		this.statei--;
		this.statei==-1&&(this.statei=this.state.length-1);
		this.rotate();
	},
	rotate(){
		var state=this.states[this.statei];
		for(var i=0;i<this.cells.length;i++){
			var cell=this.cells[i];
			if(cell!=this.orgCell){
				cell.r=this.orgCell.r+state["r"+i];
				cell.c=this.orgCell.c+state["c"+i];
			}
		}
	},
	rotateR(){
		this.statei++;
		this.statei==this.states.length&&(this.statei=0);
		this.rotate();
	},
  IMGS:{T:"img/T.png",O:"img/O.png",I:"img/I.png"}
}
//定义描述每种状态的类型
function State(r0,c0,r1,c1,r2,c2,r3,c3){
  this.r0=r0; this.c0=c0;
  this.r1=r1; this.c1=c1;
  this.r2=r2; this.c2=c2;
  this.r3=r3; this.c3=c3;
}
function T(){//定义T类型:
  var states=[
    new State(0,-1,   0,0,      0,+1,   +1,0),
    new State(-1,0,   0,0,      +1,0,   0,-1),
    new State(0,+1,   0,0,      0,-1,   -1,0),
    new State(+1,0,   0,0,      -1,0,   0,+1),
  ];
  Shape.call(
    this,
    0,3,0,4,0,5,1,4,
    this.IMGS.T,
    states,
    1);
}
Object.setPrototypeOf(T.prototype,Shape.prototype);
function O(){
  var states=[
    new State(0,-1,   0,0,     +1,-1,   +1,0)  
  ];
  Shape.call(
    this,
    0,4,0,5,1,4,1,5,
    this.IMGS.O,
    states,
    1);
}
Object.setPrototypeOf(O.prototype,Shape.prototype);
function I(){
  var states=[
    new State(0,-1,   0,0,     0,+1,    0,+2),
    new State(-1,0,   0,0,     +1,0,    +2,0)
  ];
  Shape.call(
    this,
    0,3,0,4,0,5,0,6,
    this.IMGS.I,
    states,
    1);
}
Object.setPrototypeOf(I.prototype,Shape.prototype);
function Z(){
	  var states=[
    new State(0,-1,   0,0,     +1,0,    +1,+1),
    new State(-1,0,   0,0,     +1,0,    +2,0)
  ];
	Shape.call(this,0,3,0,4,1,4,1,5,this.IMGS.Z);
}
Object.setPrototypeOf(Z.prototype,Shape.prototype)
function J(){
	Shape.call(this,0,3,1,3,2,3,2,4,this.IMGS.J);
}
Object.setPrototypeOf(J.prototype,Shape.prototype)
function L(){
	Shape.call(this,0,3,1,3,2,3,2,2,this.IMGS.L);
}
Object.setPrototypeOf(L.prototype,Shape.prototype)
function S(){
	Shape.call(this,0,5,0,4,1,4,1,3,this.IMGS.S);
}
Object.setPrototypeOf(S.prototype,Shape.prototype)
