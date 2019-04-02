
var picc = new TimeGallery({
        id: 'gallery-canvas',
        width: 640,
        height: window.innerHeight/window.innerWidth * 750,
        resourcesPath: './img/',                //资源路径设置    
        resources: [
            { src: 'start.png', id: 'start' },

        ],
        data: canvasData,
        mapEndY: 3836,
        onEnd : () => {
            console.log('动画结束');
        },
        touchSpeed:0.5,
        autoPlay:true,
    });
    picc.play();
    
    //var animate =new animate();
    function canvasData(ctx) {
        return animate.Container('contain').prop({x:0,y:0})
               .Text("good").font('normal 36px Arial').color('#fff')
               .Bitmap('sdf').fromTo(ctx.height/2.5,{x:0,y:0,scaleX:2,scaleY:2},{x:1,y:1,scaleX:1,scaleY:1})
               .getjson()
    }