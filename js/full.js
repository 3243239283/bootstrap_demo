//通过主模块，运用AMD规范定义的的require()函数调用其他模块。这里分别是(jquery.js)、、、等子模块。
require(['jquery','fullpage','move','cssjs!fullpagecss','cssjs!stylecss','slimscroll'], function (){
    //初始化页面
	$('#fullpage').fullpage({
		//配置项(设置每一个section的background-color属性)
		sectionsColor:['green','orange','gray','red'],
		//隐藏左右滑动的箭头controlArrows:false,		
		//每一页内容是否垂直居中verticalCentered:true,
		//字体是否随窗口缩放resize:true
		//滚动速度(单位:毫秒，默认700)scrollingSpeed:500,		
		//定义锚链接,定位到相应的页面。
			anchors:['page1','page2','page3','page4'],
		//是否锁定锚链接(默认为false)lockAnchors:true
		//滚动最底部后是否连续滚动到顶部(默认false)loopTop:true
		//滚动最顶部后是否连续滚动到底部(默认false)loopBottom:true
		//横向幻灯片是否循环滚动loopHorizontal:true
		//是否使用插件的滚动方式autoScrolling:true
		//是否包含滚动条scrollBar:true
		//设置section顶部和底部的padding,(默认都为0)paddingTop:'200px',paddingBottom:'200px'
		//固定的元素：fixedElements:'#header',
		//是否可以使用键盘方向键导航(默认true)：keyboarScrolling:false,
		//移动设备中滑动页面的敏感性touchSensitivity:50,
		//是否循环滚动(默认为false)
			continuousVertical:true,
		//设置锚链接是否可以控制滚动动画
			continuousVertical:true,
		//是否记录历史(默认为true),可以通过前进后退来导航recordHistory:false,
		//绑定菜单,设定相关的属性与anchors的值对应后，菜单可以控制滚动,默认为false,可以设置菜单的jquery选择器。menu:'#fullpageMenu',			
		//是否显示导航
			navigation:true,
			navigationPosition:'right',
			navigationTooltips:['page1','page2','page3','page4'],
		//是否显示当前页面导航的tooltip信息,默认为false.
			showActiveTooltip:true,
		//是否显示横向幻灯片导航
			slidesNavigation:true,
			slidesNavPosition:'top',
		//内容超过满屏后是否显示滚动条(需引入插件jquery.slimscroll.js)
			scrollOverflow:true,
			afterLoad:function(anchorLink,index){
				console.log("afterLoad:anchorLink="+anchorLink+";index="+index);
			},
			onLeave:function(index,nextIndex,direction){
				console.log("onLeave:index="+index
				+";nextIndex="+nextIndex
				+";direction="+direction);
			},
			afterRender:function(){
				console.log("afterRender");
			},
			afterResize:function(){
				console.log("afterResize");
			}
	});



/*插件内置的方法：
	silentMoveTo(section,slide)。滚动到第几页，和moveTo一样,只是没有动画效果。
	moveSlideRight():幻灯片向右滚动
	moveSlideLeft():幻灯片向左滚动
	
	moveSectionUp():向上滚动
	moveSectionDown():向下滚动
	moveTo(section,slide):滚动到第几页,页面从1开始,幻灯片从0开始

	destroy(type):销毁fullpage特效,type可以不写,或者使用all,不写type。
*/

/*回调函数
	//滚动到某一section，且滚动结束后,会触发一次此回调函数,anchorLink和index分别是锚链接和序号,从1开始计算。
	afterLoad:function(anchorLink,index){
		console.log(afterLoad:anchorLink="+anchorLink+";index="+index);
	}

	//离开一个section时,会触发一次此回调函数,index:是离开的“页面”的序号,从1开始计算;nextIndex是滚动到的目标“页面”的序号,从1开始计算;direction判断往上滚动还是往下滚动,值是up或down.
	onLeave(index,nextIndex,direction)

	//afterRender():页面初始化完成后的回调函数。

	//afterResize():浏览器窗口尺寸改变后的回调函数。

	//afterSlideLoad(anchorLink,index,slideAnchor,slideIndex):滚动到某一幻灯片后的回调函数,与afterLoad类似

	//onSlideLeave(anchorLink,index,slideIndex,direction,nextSlideIndex):离开一个slide时,会触发一次此回调函数,与onLeave类似。

*/
	



});