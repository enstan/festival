//import "./createjs.js";

require("imports-loader?this=>window!./createjs.js");
console.log("createjs");
//import("./createjs.js");
var queue = new createjs.LoadQueue(false);
 class preload{
    constructor(){
        console.log("mother fxxk");
    }
    load_file(arr,progress){
        let num=0;
        queue.installPlugin(createjs.Sound);
    //queue.loadFile({id:"sound", src:"http://path/to/sound.mp3"});
    queue.loadManifest(arr, true, "img/");
    queue.on("progress", function (e) {
        var proNum = Math.ceil(e.progress * 100);
        console.log(proNum);
        if(progress!=null){
            progress.empty();
            progress.append(proNum);
        }
    });
    //监听加载事件
    queue.on("fileload", function (e) {
     
    });   
    return queue;
    }
}

class pageResponse{
    constructor(){
    }
    response(str,mode,width,height,origin){
    document.addEventListener("DOMContentLoaded", function() {
        pageResponse({
            selectors: '.index_page,.page_content,.page_chouj',     //模块的类名，使用class来控制页面上的模块(1个或多个)
            mode : 'contain',     // auto || contain || cover 
            width : '750',      //输入页面的宽度，只支持输入数值，默认宽度为320px
            height : '1355',      //输入页面的高度，只支持输入数值，默认高度为504px
            origin : 'left top 0'
        })
    });
    }
}
export {preload,pageResponse};