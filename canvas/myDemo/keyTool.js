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
   }.false);

   return key;

};