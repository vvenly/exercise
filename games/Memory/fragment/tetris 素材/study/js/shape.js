function Cell(r,c,src){//定义子类型的所用构造函数，
	this.r=r;this.c=c;this.src=src;
}
//定义所有图形的抽象父类型Shape
function Shape(r0,c0,r1,c1,r2,c2,r3,c3,src){
	this.cells=[//每种图形都包含4个格子
		new Cell(r0,c0,src),
		new Cell(r1,c1,src),
		new Cell(r2,c2,src),
		new Cell(r3,c3,src),
	];
}
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
function T(){
	Shape.call(this,0,3,0,4,0,5,1,4,this.IMGS.T);//用call强行借用Shape方法，方法和方法之间不能继承，this.IMGS指Shape.prototype;
}
//让T的函数可以借用Shape的函数
Object.setPrototypeOf(T.prototype,Shape.prototype);
function O(){
	Shape.call(this,0,4,0,5,1,4,1,5,this.IMGS.O);
}
Object.setPrototypeOf(O.prototype,Shape.prototype)
function I(){
	Shape.call(this,0,3,0,4,0,5,0,6,this.IMGS.I);
}
Object.setPrototypeOf(I.prototype,Shape.prototype)
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
