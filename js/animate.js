
    var picc = new TimeGallery({
        id: 'gallery-canvas',
        width: 640,
        height: window.innerHeight/window.innerWidth * 750,
        resourcesPath: './img/',                //资源路径设置    
        resources: [
            { src: 'start.png', id: 'start' },
            { src: 'bg_.png', id: 'bg_' },
            { src: 'title.png', id: 'title' },
            { src: 't_2.png', id: 't_2' },
            { src: 'txt2.png', id: 'txt2' },
            { src: 'txt3.png', id: 'txt3' },
            { src: 'txt4.png', id: 'txt4' },
            { src: 'txt5.png', id: 'txt5' },
            { src: 'txt6.png', id: 'txt6' },
            { src: 'content5.png', id: 'content5' },
            { src: 'content6.png', id: 'content6' },
            { src: 'cloud.png', id: 'cloud' },
            { src: 'pc1.png', id: 'pc1' },
            { src: 'pic2.png', id: 'pic2' },
            { src: 'pic3.png', id: 'pic3' },
            { src: 'pic4.png', id: 'pic4' },
            { src: 'pic5.png', id: 'pic5' },
            { src: 'pic6.png', id: 'pic6' },
            { src: 'cd2.png', id: 'cd2' },
            { src: 'wx_pic.png', id: 'wx_pic' },
      
        ],
        data: canvasData,
        mapEndY: 3836,
        onEnd : () => {
            console.log('动画结束');
        },
        touchSpeed:0.5,
    });
    picc.play();
    var scen_height=0;
    function canvasData(ctx) {
        console.log(ctx.getImage('txt6').y);

        let duration = ctx.height/2;
        return [
            {
                id: 'start',
                type: 'bitmap',
                image: ctx.getImage('start'),
                prop: {
                    scaleX:1.5,
                    scaleY:1.5,
                    y: 230,
                    x: (640 - ctx.getImage('start').width)/2,
                }
            },
            {
                id: 'scene_bg_wrap',
                children: [
                    {
                        id: 'scene_1_bg',
                        type: 'bitmap',
                        image: ctx.getImage('bg_'),
                        prop: {
                            width:640,
                            y: 1045,
                        }
                    },
               
                ]
            },
                 
            {
                id:'scene_1',  
                prop: {
                    y: scen_height,
                },
                children:[
            {
                id: 'title',
                type: 'bitmap',
                image: ctx.getImage('title'),
                prop: {
                    x: (640 - ctx.getImage('title').width)/2,
                    y: 1045,
                    alpha:0
                },
                animation: {
                    alpha:1,
                    duration: ctx.height/2.5,                    // !!动画执行长度 ，请自己换算成用时间
                }
        
            },
            {
                id: 't_2',
                type: 'bitmap',
                image: ctx.getImage('t_2'),
                prop: {
                    x: (640 - ctx.getImage('t_2').width)/2,
                    y: 1150+ctx.getImage('t_2').height,
                    alpha:0
                },
                animation: {
                    y: 1055+ctx.getImage('t_2').height,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
            {
                type: 'shape',
                prop: {
                    y: 1120+ctx.getImage('t_2').height,
                    width:20,
                    alpha:1,
                    graphics:{
                        beginFill:['#f5c245'],
                        drawRect:[(640-ctx.getImage('t_2').width)/2,0,ctx.getImage('t_2').width,2]
                    }
                },
                animation: {
                    alpha:1,
                    width:3,
                    duration: ctx.height/2,
                    graphics:{
                        drawRect:[640/2,0,40,5]
                    }
                }
            },
            {
                id: 'pc1',
                type: 'bitmap',
                image: ctx.getImage('pc1'),
                prop: {
                    x: 640,
                    y: 1250+ctx.getImage('t_2').y,
                    alpha:1
                },
                animation: {
                    x: 220,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
                ]
            },

            ////
                    
            {
                id:'scene_2',
                prop: {
                    y: scen_height+600,
                },

                children:[
            {
                id: 'txt2',
                type: 'bitmap',
                image: ctx.getImage('txt2'),
                prop: {
                    x: 0-ctx.getImage('txt2').width,
                    y: 1045,
                    alpha:1
                },
                animation: {
                    afterById:'pc1',
                    top:-300,
                    alpha:1,
                    x:50,
                    duration: ctx.height/2.5,                    // !!动画执行长度 ，请自己换算成用时间
                }
            },
            {
                type: 'shape',
                prop: {
                    x: 0-ctx.getImage('txt2').width,
                    y: 1100+ctx.getImage('txt2').y,
                    width:20,
                    alpha:1,
                    graphics:{
                        beginFill:['#f5c245'],
                        drawRect:[0,0,ctx.getImage('txt2').width,2]
                    }
                },
                animation: {
                    startById:'txt2',
                    x:50,
                    alpha:1,
                    duration: ctx.height/1.5,
                }
            },
            {
                id: 'pic2',
                type: 'bitmap',
                image: ctx.getImage('pic2'),
                prop: {
                    x: 640,
                    y: 1120+ctx.getImage('txt2').y,
                    alpha:1
                },
                animation: {

                    x: 220,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            }

                ]
            },

            /////
           
            {
                id:'scene_3',
                prop: {
                    y: scen_height+1200,
                },
                children:[
            {
                id: 'txt3',
                type: 'bitmap',
                image: ctx.getImage('txt3'),
                prop: {
                    x: 640/2,
                    regX:(640-ctx.getImage('txt3').width)/2,
                    scaleX:0,
                    scaleY:0,
                    y: 1045,
                    alpha:1
                },
                animation: {
                    afterById:'pic2',
                    alpha:1,
                    scaleX:1,
                    scaleY:1,
                    duration: ctx.height/2.5,                    // !!动画执行长度 ，请自己换算成用时间
                }
            },
            {
                type: 'shape',
                prop: {
                    x: 640/2,
                    regX:(640-ctx.getImage('txt3').width)/2,
                    y: 1100+ctx.getImage('txt3').y,
                    scaleX:0,
                    scaleY:0,
                    alpha:1,
                    graphics:{
                        beginFill:['#f5c245'],
                        drawRect:[0,0,ctx.getImage('txt3').width,2]
                    }
                },
                animation: {
                    startById:'txt3',
                    scaleX:1,
                    scaleY:1,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
            {
                id: 'pic3',
                type: 'bitmap',
                image: ctx.getImage('pic3'),
                prop: {
                    x: 640,
                    y: 1620+ctx.getImage('txt3').y,
                    scaleX:0,
                    scaleY:0,
                    alpha:1
                },
                animation: {
                    afterById:'txt3',
                    x: 220,
                    y: 1120+ctx.getImage('txt3').y,
                    alpha:1,
                    scaleX:1,
                    scaleY:1,
                    
                    duration: 200,                        //随便设的
                }
            },

                ]
            },

          ///
                  
            {
                id:'scene_4',
                prop: {
                    y: scen_height+1700,
                },
                children:[
            {
                id: 'txt4',
                type: 'bitmap',
                image: ctx.getImage('txt4'),
                prop: {
                    x: -310,
                    scaleX:5,
                    scaleY:5,
                    y: 0,
                    alpha:0
                },
                animation: {
                    afterById:'pic3',
                    y: 1045,

                    x:10,
                    alpha:1,
                    scaleX:1,
                    scaleY:1,
                    duration: ctx.height/9,                    // !!动画执行长度 ，请自己换算成用时间
                }
            },
            {
                type: 'shape',
                prop: {
                    x:10,
                    y: 1100+ctx.getImage('txt4').y,
                    scaleX:0,
                    scaleY:0,
                    alpha:1,
                    graphics:{
                        beginFill:['#f5c245'],
                        drawRect:[0,0,ctx.getImage('txt4').width,2]
                    }
                },
                animation: {
                    scaleX:1,
                    scaleY:1,
                    alpha:1,
                    duration: ctx.height/3,
                }
            },
            {
                type: 'text',
                prop: {
                    text: '世界上没有什么事情是一个红包',
                    font: 'normal 28px Arial',  // '样式 大小 字体'
                    color: '#fff',
                    y: 1120+ctx.getImage('txt4').y,
                    x:-300,
                    alpha:0,

                },
                animation: {
                    afterById:'txt4',
                    x:10,
                    alpha:1,
                    duration: ctx.height/3,
                }
            },
            {
                type: 'text',
                prop: {
                    text: '不能解决的!',
                    font: 'normal 28px Arial',  // '样式 大小 字体'
                    color: '#fff',
                    y: 1120+ctx.getImage('txt4').y+40,
                    x:600,
                    alpha:0,

                },
                animation: {
                    afterById:'txt4',
                    x:10,
                    alpha:1,
                    duration: ctx.height/4,
                }
            },
            {
                id:'txt_4',
                type: 'text',
                prop: {
                    text: '如果有，那就两个！',
                    font: 'normal 28px Arial',  // '样式 大小 字体'
                    color: '#fff',
                    y: 1120+ctx.getImage('txt4').y+80,
                    x:-300,
                    alpha:0,

                },
                animation: {
                    afterById:'txt4',
                    top:100,
                    x:10,
                    alpha:1,
                    duration: ctx.height/3,
                }
            },
            {
                id: 'pic4',
                type: 'bitmap',
                image: ctx.getImage('pic4'),
                prop: {
                    x: 640,
                    y: ctx.getImage('txt4').y,
                  
                    alpha:1
                },
                animation: {
                    afterById:'txt_4',
                    x: 100,
                    y: 1280+ctx.getImage('txt4').y,
                    alpha:1,            
                    duration: 150,                        //随便设的
                }
            },
            
                ]
            },
            ///
            {
                id:'scene_5',
                prop: {
                    y: scen_height+2300,
                },
                children:[
            {
                id: 'txt5',
                type: 'bitmap',
                image: ctx.getImage('txt5'),
                prop: {
                    x: 740-ctx.getImage('txt5').width,
                    y: 1045,
                    alpha:1
                },
                animation: {
                    x: 740-ctx.getImage('txt5').width,
                    duration: ctx.height/4,                    // !!动画执行长度 ，请自己换算成用时间
                }
            },
            {
                type: 'shape',
                prop: {
                    x:-ctx.getImage('txt5').width,
                    y: 1100+ctx.getImage('txt5').y,
                    graphics:{
                        beginFill:['#f5c245'],
                        drawRect:[0,0,ctx.getImage('txt5').width,2]
                    }
                },
                animation: {
                    x:640-ctx.getImage('txt5').width,

                    duration: ctx.height/3,
                }
            },
            {
                type: 'text',
                prop: {
                    text: '为感谢小伙伴们的关注与支持'
                        +'\n 4月6日（周四）-4月8日（周六）'
                        +'\n只要关注并转发聚焦黄金账号文章'
                        +'\n到朋友圈或微信群发截图微信后台'
                        +'\n便可进红包群领取红包！！！',
                    font: 'normal 28px Arial',  // '样式 大小 字体'
                    color: '#fff',
                    y: 1000+ctx.getImage('txt5').y,
                    x:640-ctx.getImage('txt5').width,
                    alpha:0,
                },
                animation: {
                    afterById:'txt5',
                    y: 1180+ctx.getImage('txt5').y,

                    alpha:1,
                    duration: ctx.height/3,
                }
            }
                ]
            },
          
          ///scene_6
        
            {
                id:'scene_6', 
                prop: {
                    y: scen_height+2280,
                },
                children:[
    
            {
                id: 'pic5',
                type: 'bitmap',
                image: ctx.getImage('pic5'),
                prop: {
                    x: 20,
                    y: 1800,
                    regX:0,
                    regY:ctx.getImage('pic5').width,
                    rotation:-90,
                    alpha:0
                },
                animation: {
                    rotation:0,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
            {
                id: 'pic6',
                type: 'bitmap',
                image: ctx.getImage('pic6'),
                prop: {
                    x: 640,
                    y: 1900,
                    regX:450,
                    regY:ctx.getImage('pic6').width,
                    rotation:90,
                    alpha:0
                },
                animation: {
                    rotation:0,
                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
            {
                id: 'txt6',
                type: 'bitmap',
                image: ctx.getImage('txt6'),
                prop: {
                    x: 320,                                  //中心点regxY改了后，x,y坐标也要重新计算更改
                    y: 2200,
                    regX:ctx.getImage('txt6').width/2,      //??偏移量？？
                    rotation:0,
                    alpha:0
                },
                animation: {
                    afterById:'pic5',
                    rotation:360,
                    y: 1900,
                    alpha:1,
                    duration: ctx.height/4,
                }
            },
            {
                id: 'content6',
                type: 'bitmap',
                image: ctx.getImage('content6'),
                prop: {
                    x: (640-ctx.getImage('content6').width)/2,
                    y:  1500,
                    alpha:0
                },
                animation: {
                    endById:'txt6',
                    y:  2030,
                    top:100,

                    alpha:1,
                    duration: ctx.height/2.5,
                }
            },
                ]
            },

            ////宽度3300
            {
                id:'bottom',
                prop: {
                    y: scen_height+3400,
                },
                children:[
                    {
                        id: 'wx_pic',
                        type: 'bitmap',
       
                        image: ctx.getImage('wx_pic'),
                        prop: {
                            x: 320,
                            y:  1240,
                            regX:ctx.getImage('wx_pic').width/2,      //??偏移量？？
                            scaleX:0,
                            scaleY:0,
                            alpha:0
                        },
                        animation: {
                            scaleX:1,
                            scaleY:1,
                            alpha:1,
                            duration: ctx.height/2.5,
                        }
                    },
                    {
                        type: 'text',
                        prop: {
                            text: '聚焦黄金',
                            font: 'bold 40px Arial',  // '样式 大小 字体'
                            color: '#f6c346',
                            y:1250+ctx.getImage('wx_pic').height,
                            x:(640-ctx.getImage('wx_pic').width)/2-10,
                            alpha:0,
                        },
                        animation: {
                            startById:'wx_pic',        
                            alpha:1,
                            duration: ctx.height/3,
                        }
                    },
                    {
                        type: 'shape',
                        prop: {
                            scaleX:0,
                            graphics: {
                                beginFill: ['#f6c346'],    // [填充颜色]
                                drawRect: [0, 1300+ctx.getImage('wx_pic').height, 640, 70] // 创建矩形 [填充坐标X，填充坐标Y，填充宽度，填充高度] 
                                // drawCircle: [0, 0, 25]; // 创建圆形 [填充坐标X，填充坐标Y，半径]
                            }
                        },
                        animation: {
                            startById:'wx_pic',    
                            scaleX:1,
                            regX:0,
                            alpha:1,
                            duration: ctx.height/2.5,
                        }
                    },
                    {
                        type: 'text',
                        prop: {
                            text: '一  个 实 用 的 投 资 指 南 订 阅 号',
                            font: 'bold 35px Arial',  // '样式 大小 字体'
                            color: '#000',
                            y:1320+ctx.getImage('wx_pic').height,
                            x:640,
                            alpha:0,
                        },
                        animation: {
                            startById:'wx_pic',     
                            x:40,
                            alpha:1,
                            duration: ctx.height/3,
                        }
                    },

                ]
            }
        ];
    }