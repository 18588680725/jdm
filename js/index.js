window.onload=function () {
    /*初始化页面功能*/
    /*搜索栏*/
    search();
    /*轮播图*/
    banner();
    /*倒计时*/
    countDown();

}
var search=function () {
    //元素
  var search=document.querySelector(".jd_search_box");
  var banner=document.querySelector(".jd_banner");
  //轮播图高度
  var height=banner.offsetHeight;
  window.onscroll=function () {
      /*获取当前页面滚动的距离*/
      var top=document.body.scrollTop;/*谷歌*/
      // var top=document.documentElement.scrollTop;/*ie*/
      var a=0;
      if(top>height){
            a=0.9;
      }else{
            a=0.9*(top/height);
      }
      // console.log(a)
      search.style.background='rgba(222,24,27,'+a+')';
  }
}
var banner =function () {
    //大容器
    var banner=document.querySelector(".jd_banner");
    var width=banner.offsetWidth;
    //图片容器
    var imagebox=banner.querySelector("ul:first-child");
    //指示点容器
    var pointBox=banner.querySelector("ul:last-child")
    //所有的点
    var points=pointBox.querySelectorAll("li");
    // console.log(points)
    //1,无缝滚动 无缝滑动（定时器 过渡 位移）
    var addTransition=function () {
        imagebox.style.transition='all 0.2s';
        imagebox.style.webkitTransition='all 0.2s';
    }
    var removeTransition=function () {
        imagebox.style.transition='none';
        imagebox.style.webkitTransition='none';
    }
    var setTranslatex=function (translateX) {
        imagebox.style.transform='translateX('+translateX+'px)';//位移轮播图宽度
        imagebox.style.webkitTransform='translateX('+translateX+'px)';//位移轮播图宽度
    }
    var index=1;
    var timer=setInterval(function () {
        index++;
        // 加过渡
        addTransition();
        //位移
        setTranslatex(-index*width);
    },2000)

    imagebox.addEventListener("transitionend",function () {
        if(index>=5)
        {
            index=1
            // 去掉过渡
            removeTransition()
            //位移
            setTranslatex(-index*width);
        }else if (index<=0){
            index=4
            // 去掉过渡
            removeTransition()
            //位移
            setTranslatex(-index*width);
        }
        setPoints();
    })
    
    var setPoints=function () {
        for (var i=0;i<points.length;i++){
            points[i].classList.remove('now')
        }
        points[index-1].classList.add('now')
    }
    var  startX=0;
//    触摸滑动
    imagebox.addEventListener('touchstart',function (e) {
        startX=e.touches[0].clientX;
        clearInterval(timer)
    })
    var distanceX=0;
    var isMove=false;
    imagebox.addEventListener('touchmove',function (e) {
        var moveX=e.touches[0].clientX;
         distanceX=moveX-startX;
        var  translateX=-index*width+distanceX;
        removeTransition();
        setTranslatex(translateX);
        isMove=true;

    })
    imagebox.addEventListener('touchend',function (e) {
        if(isMove){
            if (Math.abs(distanceX)>width/3)
            {
                if(distanceX<0)
                {
                    index++;
                }else{
                    index--;
                }
                addTransition();
                setTranslatex(-index*width)

            }else{
                addTransition();
                setTranslatex(-index*width)
            }
        }
        clearInterval(timer)
        timer=setInterval(function () {
            index++;
            // 加过渡
            addTransition();
            //位移
            setTranslatex(-index*width);
        },2000)
        //重置参数
        startX=0;
        isMove=false;
        distanceX=0;
    })
}
var countDown=function () {
    var  time=60*60*11;//11个小时
    var skTime=document.querySelector('.skill_time');
    var spans=skTime.querySelectorAll('span');

    var timer=setInterval(function () {
        time--;
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=time%60;
        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;

        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;
        if(time<=0){
            clearInterval(timer)
        }
    },1000)
}