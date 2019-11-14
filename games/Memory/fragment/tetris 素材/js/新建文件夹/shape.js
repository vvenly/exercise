function Cell(r,c,src){//定义子类型的所用构造函数，
	this.r=r;this.c=c;this.src=src;
}
//定义所有图形的抽象父类型Shape
function Shape(r0,c0,r1,c1,r2,c2,r3,c3,src,states,orgi){
	this.cells=[//每种图形都包含4个格子
		new Cell(r0,c0,src),
		new Cell(r1,c1,src),
		new Cell(r2,c2,src),
		new Cell(r3,c3,src),
	];
		this.states=states;//保存图形的所有旋转状态
		this.orgCell=this.cells[orgi];//根据指定的参照格下标，获得参照格对象
		this.statei=0;//保存现在图形所用的状态序号
},
Shape.prototype={
	moveDown(){
		//遍历当前图形的cells	 为每个格子r坐标号+1，下移一行
		for(var i=0;i<this.cells.length;i++)
			this.cells[i].r++;
	},	
	moveLeft(){
		//遍历当前图形的cells	为每个格子c坐标号-1，左移一行
		for(var i=0;i<this.cells.length;i++)
			this.cells[i].c--;
	},	
	moveRight(){
		//遍历当前图形的cells	为每个格子c坐标号+1，右移一行
		for(var i=0;i<this.cells.length;i++)
			this.cells[i].c++;
	},
	rotateL(){},
	rotateR(){},
	IMGS:{T:"img/T.png",O:"img/O.png",I:"img/I.png",Z:"img/Z.png",J:"img/J.png",L:"img/L.png",S:"img/S.png",}
}
function State(r0,c0,r1,c1,r2,c2,r3,c3){
		this.r0=r0;this.c0=c0;
		this.r1=r1;this.c1=c1;
		this.r2=r2;this.c2=c2;
		this.r3=r3;this.c3=c3;
	}
function T(){
	var states=[
		new State(0,-1,   0,0,      0,+1,   +1,0),
    new State(-1,0,   0,0,      +1,0,   0,-1),
    new State(0,+1,   0,0,      0,-1,   -1,0),
    new State(+1,0,   0,0,      -1,0,   0,+1),
	];
	Shape.call(this,0,3,0,4,0,5,1,4,this.IMGS.T,
		states,1);//用call强行借用Shape方法，方法和方法之间不能继承，this.IMGS指Shape.prototype;
}
//让T的函数可以借用Shape的函数
Object.setPrototypeOf(T.prototype,Shape.prototype);
function O(){
  var states=[
    new State(0,-1,   0,0,     +1,-1,   +1,0)  
  ];
	Shape.call(this,0,4,0,5,1,4,1,5,this.IMGS.O，
		states,1);
}
Object.setPrototypeOf(O.prototype,Shape.prototype)
function I(){
	var states=[
    new State(0,-1,   0,0,     0,+1,    0,+2),
    new State(-1,0,   0,0,     +1,0,    +2,0)
  ];
	Shape.call(this,0,3,0,4,0,5,0,6,this.IMGS.I,
		states,1);
}
Object.setPrototypeOf(I.prototype,Shape.prototype)
/*
function Z(){
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


T:
state1:[0,-1, 0,0, 0,+1,+1,0];//根据1号位置取相对的位置
state2:[-1,0, 0,0, +1,0, 0,-1];
state3:[0,+1, 0,0, 0,-1, -1,0];
state4:[+1,0, 0,0, -1,0, 0,+1]

I:
state1:[0,-1, 0,0, 0,+1, 0,+2]
state2:[-1,0, 0,0, +1,0, +2,0];

O:
state1:[0,-1, 0,0, +1,-1, +1,0];

*/