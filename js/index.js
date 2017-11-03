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

}
var countDown=function () {

}