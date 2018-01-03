//页面被初始化完成后，执行操作
$(document).on('pageinit','#organization',function(){
	//当用户水平滑动某个元素超过30px时被触发:左滑
	$('#contentOfOrg').on('swipeleft',function(){
		var allNav=$('.org');
		var current=function(allNav){
			for(var i=0;i<allNav.length;i++){
				if(allNav.get(i).style.borderBottom=="2px solid orange"){
					return i;
				}
			}
		return 0;
		};
		var cur=current(allNav);
		var next=(cur+1)%5;
		allNav.get(cur).style.borderBottom = "2px solid #f3f3f3";
		allNav.get(next).style.borderBottom = "2px solid orange";
	});
	//当用户水平滑动某个元素超过30px时被触发:左滑
	$('#contentOfOrg').on('swiperight',function(){
		var allNav=$('.org');
		var current=function(allNav){
			for(var i=0;i<allNav.length;i++){
				if(allNav.get(i).style.borderBottom=="2px solid orange"){
					return i;
				}
			}
		return 0;
		};
		var cur=current(allNav);
		var next=(cur-1+5)%5;
		allNav.get(cur).style.borderBottom = "2px solid #f3f3f3";
		allNav.get(next).style.borderBottom = "2px solid orange";
	});
});

/*$(window).on('orientationchange',function(event){
   alert('方向已改变~');
   alert('方向是：'+event.orientation);
});*/

$(window).on('orientationchange',function(){
   alert('方向已改变~');
   //可以通过window对象来获取方向值，如果orientation==0表示垂直portrait，如果orientation=90或-90表示水平landscape视图
   if(window.orientation==0){
   	
   }
   else{
   	
   }
});
