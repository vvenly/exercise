
//                    for(var j=1;j<json.data.length-1;j++){//站名
//                        var name=json.data[j].name;
//
//                        var currentStart=Math.ceil((json.data[j].pos-projectFrom)*every+174-name.length*7);//当前站名开始坐标
//                        var currentEnd=currentStart+name.length*13; //当前站名结束坐标
//
//                        var nextStart=Math.ceil((json.data[j+1].pos-projectFrom)*every+174-json.data[j+1].name.length*7); //下一站名开始坐标
//
//                        if(currentEnd >= nextStart  && Math.ceil((json.data[j-1].pos-projectFrom)*every+174-json.data[j-1].name.length*7+json.data[j-1].name.length*13) >=currentStart  || currentEnd >= nextStart){
//                            cansText.fillText(name,currentStart,45);
//                        }else{
//                            cansText.fillText(name,currentStart,62);
//                        }
//                    }
//                    var s=json.data.length-1;
//                    cansText.fillText(json.data[0].name,(json.data[0].pos-projectFrom)*every+174-json.data[0].name.length*7,62);
//                    cansText.fillText(json.data[s].name,(json.data[s].pos-projectFrom)*every+174-json.data[s].name.length*7,62);