
//具体相关参数可以参考https://github.com/chenliangwulin/time-gallery
//相关api
var containers=function(){
    var container={};
    return container;
};

var animate=function(ctx){
    this.canvas_json=[];               //一个主的json用于存储全部数据
    this.item=this.container;          //存储当前的属性对象，用于添加fromto,prop等方法
   
    this.container;                 //section?
    this.ischildren=true;              //判断当前需要添加fromto,prop等方法，是contain对象，还是children

    // 在多层级contain下该怎么构造链式呢？contain().contain()
    this.Container=function(id){
        // this.container={id:id_str,type:'contain',children:[]};
        this.ischildren=false;
        this.container=new containers();
        this.container.id=id;
        this.container.type="contain";
        this.container.children=[];
        this.push(this.container);
        return this;
    }
    
    this.Bitmap=function(name){
        this.ischildren=true;
        this.container.children.push({
            id:name,
            type: 'bitmap',
           image: name,
        });        
        return this;
    }
    //font样式 设置
    this.Text=function(text){
        this.ischildren=true;
        this.container.children.push({
            //id:name,
            type: 'text',
            prop:{
                text:text,
                font:'',
                color:''
            },
            image: ctx.getImage(name),
        });
        return this;
    }
    this.font=function(str){
        this.container.children[this.container.children.length-1].prop.font=str;
        return this;
    }
    this.color=function(str){
        this.container.children[this.container.children.length-1].prop.color=str;
        return this;
    }
    //shape的相关jsonp构造方法
    //
    this.Shape=function(name){
        this.ischildren=true;
        this.container.children.push({
            id:name,
            type: 'shape',
            prop:{
                graphics:{

                }
            }
        });
        return this;       
    }

    this.beginFill=function(fill){                             //格式为 ['#e8340c']
        this.container.children[this.container.children.length-1].prop.graphics.beginFill=[fill];
        return this;
    }
    this.drawRect=function(x,y,w,h){                              //格式为[0, 0, 750, 750]
        this.container.children[this.container.children.length-1].prop.graphics.drawRect=[x,y,w,h];
        return this;

    }
    this.drawCircle=function(circle){                          //格式为 [0, 0, 25]
        this.container.children[this.container.children.length-1].prop.graphics.drawCircle=circle;
        return this;
    }

    //frames: {'height': 292, 'width': 165, 'count': 64, 'regX': 0,  'regY': 0}, // 每帧的尺寸，count是总帧数
    // animations: {
    //     run: [0, 5, 'jump', 0.05],  //[开始帧，结束帧，动画完成后的动作，速度]
    //     jump: [26]
    // }
    //sprite的相关方法
    this.Sprite=function(path){               //输入图片的路径
        this.ischildren=true;
        this.container.children.push({
            id:name,
            type: 'sprite',
            sheet:{
                images:[path],
                // frames: {}, // 每帧的尺寸，count是总帧数
                // animations:{}
            },
            method:{
                gotoAndPlay: []// 执行 run 帧动画
            }
        });
        return this;
    }
    this.frame=function(jsonp){             
        this.container.children[this.container.children.length-1].sheet.frames=jsonp;
    }
    this.animations=function(jsonp){             
        this.container.children[this.container.children.length-1].sheet.frames=jsonp;
    }
    this.method=function(method){                                  //可传run,stop等参数
        this.container.children[this.container.children.length-1].method={
            gotoAndPlay:[method]
        };
    }

    this.getjson=function(){
        console.log('this.canvas_json');
        return this.canvas_json;
    }
    this.push=function(){
        this.canvas_json.push(this.container);
    }

}
animate.prototype={                          //原型方法封装
    fromTo:function(duration,from,to){
        if(this.ischildren){
            var prop=this.container.children[this.container.children.length-1].prop;
            console.log(prop);
            this.container.children[this.container.children.length-1].prop=Object.assign(prop, from);   //对象合并
            this.container.children[this.container.children.length-1].animation=to;
            this.container.children[this.container.children.length-1].animation.duration=duration;

        }else{
            this.container.prop=from;
            this.container.animation=to;
            this.container.animation.duration=duration;
        }
        return this;
    },
    prop:function(jsonp){                     //str为json对象
        if(this.ischildren){
            this.container.children[this.container.children.length-1].prop=jsonp;
        }else{
            this.container.prop=jsonp;
        }
        return this;
    },
    animate:function(){
        if(this.ischildren){
            this.container.children[this.container.children.length-1].animate=jsonp;
        }else{
            this.container.prop=jsonp;
        }
        return this;
    },
    on:function(event,arg2){
        if(this.ischildren){
            this.container.children[this.container.children.length-1].event={
                type:event,
                handle:arg2
            };
        }else{
            this.container.event={
                type:event,
                handle:arg2
            };
        }
        return this;
    },
    fonts:containers
}


// //测试
var animate =new animate();
    // animate.Container('contain') .prop({id:'contain'})
    // .Bitmap('bitmap')            .prop({id:'btmap',width:2})
    // .Text("text")                .font('normal 36px Arial')
                            
    // //.Shape("shape")              .beginFill('#e8340c').drawRect(0,1,2,3);        
            

    // animate.Container('section2').prop({id:'section'})
    //        .Bitmap('bitmap2')    .prop({id:'bitmap2'})
    //        .getjson();

    animate.Container('section3').prop({id:'section'})
         .Bitmap('bitmap3')      .fromTo(1,{x:1,y:0,scaleX:1.5,regX:0},{x:1,y:0,scaleX:1.5,regX:0})
                                 .on('click',function(e){console.log("test");
    });
