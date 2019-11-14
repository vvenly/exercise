// function addEvent(obj, type, fn) {
//     if (obj.attachEvent) {
//         obj['e' + type + fn] = fn;
//         obj[type + fn] = function() {
//             obj['e' + type + fn](window.event);
//         }
//         obj.attachEvent('on' + type, obj[type + fn]);
//     } else obj.addEventListener(type, fn, false);
// }

function addEvent( obj, type, fn ) {
    if ( obj.attachEvent ) {
        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
        obj.attachEvent( 'on'+type, obj[type+fn] );
    } else
        obj.addEventListener( type, fn, false );
}
function removeEvent( obj, type, fn ) {
    if ( obj.detachEvent ) {
        obj.detachEvent( 'on'+type, obj[type+fn] );
        obj[type+fn] = null;
    } else
        obj.removeEventListener( type, fn, false );
}


window.tools={};

window.tools.getMouse=function(element){
    var mouse={x:0,y:0};

    addEvent(element,"mousemove",function(e){
        var x, y;
        //在IE中 event对象是作为window对象的一个属性存在
        var e= e || window.event;

        //兼容做到ie9
        if(e.pageX || e.pageY){
            x=e.pageX;
            y=e.pageY;
        }else{
            x=e.clientX+document.body.scrollLeft || document.documentElement.scrollLeft;
            y=e.clientY+document.body.scrollTop || document.documentElement.scrollTop;
        }

        x-=element.offsetLeft;
        y-=element.offsetTop;


        mouse.x=x;
        mouse.y=y;


    });

    return mouse;
};



window.tools.getKey=function(){
    let key={};

    window.addEventListener("keydown",function(e){

        let keys=e.keyCode;

        if(keys== 38 ||keys==87){
            key.direction="up";
        }else if(keys==39 || keys==68){
            key.direction="right";
        }else if(keys==40 || keys ==83){
            key.direction="down";
        }else if(keys==37 || keys ==65){
            key.direction="left";
        }else{
            key.direction="";
        }
    },false);



    return key;

};