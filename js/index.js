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
    console.log(width)
    //图片容器
    var imagebox=banner.querySelector("ul:first-child");
    //指示点容器
    var pointBox=banner.querySelector("ul:last-child")
    //所有的点
    var points=pointBox.querySelectorAll("li");
    // console.log(points)
    //1,无缝滚动 无缝滑动（定时器 过渡 位移）
    var index=1;
    var timer=setInterval(function () {
        index++;
        if (index==5)
            index=1;
        // 加过渡
        imagebox.style.transition='all 0.2s';
        imagebox.style.webkitTransition='all 0.2s';
        //位移
        imagebox.style.transform='translateX('+(-index*width)+'px)';//位移轮播图宽度
        imagebox.style.webkitTransform='translateX('+(-index*width)+'px)';//位移轮播图宽度

    },2000)
}
var countDown=function () {

}