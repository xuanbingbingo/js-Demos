﻿// JavaScript Document



//通过id获取到HTML中某个对象：
function $(obj){
	
		return (typeof obj=="string")?document.getElementById(obj):obj;		
}

//字符串去重:

function clearDouble(str){
	
	var arr=new Array();
	for(var i=0;i<str.length;i++)
	{	
		if(arr.indexOf(str[i])==-1)
		{
			arr.push(str.charAt(i));
		}
	}
	str=arr.toString();
	
	return str;
	
}

//注册页面验证用户名是否符合书写规范（字母，数字，下划线组成且首个字符不能为数字，且长度在6-20之间）

function check(obj_input){						//参数obj_input为要判断的对象（如某个输入框）
	var str=obj_input.value;
	var a=str.charCodeAt(0);//获取首个字符的Acsii码
	if(str.length>=6&&str.length<=20){
		
		if((a>=65&&a<=90)||(a>=97&&a<=122)||a==95){
			var n="";
			for(var i=0;i<str.length;i++){
				n=str.charCodeAt(i);	
				if((n>=65&&n<=90)||(n>=97&&n<=122)||(n==95)||(n>=48&&n<=57)){
					
				}else{
						
					alert("您输入的用户名有错误！");
					
					break;
				}
			
			}			
			
		}else
		{
			alert("您的用户名的首字母必须符合规则！");	
		}
			
	}else
	{
		alert("用户名中请输入6-20位字符");
	}	
}

//冒泡排序改变原有数组(将数组从小到大排列)的算法：

function maopao(array){
	
		var temp = 0;
		
		for(var i = 0; i < array.length - 1; i++ ){
	
		for(var j = 0; j < array.length - i - 1; j++){ //i控制比较的次数，-1控制下标超界
		
			if(array[j] > array[j+1]){
			
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
				
			}
			
		}
		
	}
	return array;
}
	


//判断某一年是否是闰年的算法：(用弹出对话框的形式判断)

function isLeapYear(year){
		var ss="";
		if((year%4==0)&&(year%100!=0)||(year%400==0))
		{			
			return true;		
		}
		else{
		
			return false;
			
		}
		
}

//求1+2!+3!+...+n!之和的算法：

function jieCheng(n){
		var sum=0;
		var times=1;
		for(i=1;i<=n;i++)
		{
			times=times*i;
			sum+=times;	
		}	
		return sum;			
}
	
	
//求任意n个给定的值的和：

function doAdd(){
	
	var k=arguments.length;//arguments是传入的参数构成的数组；
	var sum=0;
	for(i=0;i<k;i++)
	{
		sum+=arguments[i];	
	}
	return sum;
	
}	
//滚动距离获取的兼容性写法：
function getScrollTop(){
	if(document.documentElement.scrollTop){	
		return document.documentElement.scrollTop;	
	}else{	
		return document.documentElement.scrollTop || document.body.scrollTop;
}
}
//获取上一个兄弟节点的兼容性写法
function previous(obj){
	if(obj.previousElementSibling){
		return obj.previousElementSibling;	
	}else{
		return obj.previousSibling;
	}
}
//封装getElementsByClassName

function getByClass(obj,sClass){
	
	if(document.getElementsByClassName){
	
		return obj.getElementsByClassName(sClass);
		
	}else{
		var aEle = obj.getElementsByTagName("*");
		var aTarget = [];
		var arr = [];
		for(var i=0; i<aEle.length; i++){
			
			aTarget = aEle[i].className.split(' ');
			
			for(var j=0; j<aTarget.length; j++){
				
				if(aTarget[j]==sClass){
					
					arr.push(aEle[i]);
					
				}
			}
		}
		return arr;
	}
	
}	
//封装获取样式 函数
function getStyle(obj,sName){
	
	if(obj.currentStyle){
		
		return obj.currentStyle[sName];	
		
	}else{
		
		return getComputedStyle(obj,false)[sName];
		
	}
		
}
//首位元素节点的兼容性性写

//首元素子节点
function firstChild(obj){
	if(obj.firstElementChild){
		return obj.firstElementChild;	
	}else{
		return obj.firstChild;
	}
}
//尾元素子节点
function lastChild(obj){
	if(obj.lastElementChild){
		return obj.lastElementChild;	
	}else{
		return obj.lastChild;
	}
	}
//获取子元素节点的兼容性写法：
function getElementChildNodes(arr){
			var temp=[];
			for(var i=0;i<arr.length;i++){
				if(arr[i].nodeType==1){
					temp.push(arr[i]);
				}
			}
			return temp;
		}

//将日期格式按一定的格式输出

function format(date,s,m){ //将日期date按s格式化输出年月日，按m格式化输出时分秒
	
	var year=date.getFullYear();
	var month=(date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : ""+(date.getMonth()+1);
	var datee=date.getDate()<10 ? "0"+date.getDate() : ""+date.getDate();
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	
	
	return year+s+month+s+datee+"&nbsp"+hour+m+minute+m+second;		
}
//判断两个日期相差的天数
function getDiffDay(date1,date2){
	
	var cha=date1-date2;//两个日期相减是毫秒数相减；
	var day=parseInt(cha/(1000*60*60*24));
	//document.write("您输入的两个日期的天数差为"+Math.abs(day)+"<br>");
	return Math.abs(day);
	//var yearCha=date1.getFullYear()-date2.getFullYear();
	//var monthCha=date1.getMonth()-date2.getMonth();
	//var dateCha=date1.getDate()-date2.getDate();
		
}
//获得当前日期N天以后的日期

function getAfterN(date,day){
	
	var fanhui=date.getTime()+day*24*60*60*1000;
	date.setTime(fanhui);
	document.write(day+"天以后的日期为"+date.toLocaleString());
	return date;
	
}

//获得某个月份的天数

function panDuan(year,month){
	
	var arr=["28天","29天","30天","31天"];
		
		switch(month){
			
			case 1:	
			case 3:
			case 5:				
			case 7:				
			case 8:				
			case 10:
			case 12:			
				document.write("本年度当前月份的天数为"+arr[2]);
				return arr[2];
			case 2:
				if(isLeapYear(year)){
					
					document.write("本年度当前月份的天数为"+arr[1]);
					return arr[1];
				}else{				
					document.write("本年度当前月份的天数为"+arr[0]);
					return arr[0];
				}
			case 4:
			case 6:
			case 9:
			case 11:				
				document.write("本年度当前月份的天数为"+arr[3]);
				return arr[3];
			default:
				document.write("您输入的月份有问题！");
				return -1;
		}		
}
//用系统带的sort方法将原有数组从小到大排列的算法：

function paixu(arr){						//arr为需要进行从小到大排序的数组
		
	arr.sort(compare);
	
}

function compare(a,b){
	
	return a-b;
	
}
//表格排序所需排序方法：
function Objectcompare(a,b){
	
	
	return parseInt(a.children[0].innerHTML)-parseInt(b.children[0].innerHTML);
	
	
}
function paixuxu(arr){
	
	arr.sort(Objectcompare);
}
//浏览器类型
function checkBrowser() {
    ua = navigator.userAgent;
    ua = ua.toLocaleLowerCase();
    var browserVersion;
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
        browserType = "IE";
        browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
    } else if (ua.match(/firefox/) != null) {
        browserType = "火狐";
    } else if (ua.match(/opera/) != null) {
        browserType = "欧朋";
    } else if (ua.match(/chrome/) != null) {
        browserType = "谷歌";
    } else if (ua.match(/safari/) != null) {
        browserType = "Safari";
    }
    var arr = new Array(browserType, browserVersion);
    return arr;
}

//检测是否是移动设备
function browserRedirect(){
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	document.writeln("您的浏览设备为：");
	if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		document.write("phone");
	}else if(bIsIpad){
		document.write("iPad");
	} else {
		document.write("pc");
	}
}
//通过属性和属性值获取元素的函数封装
function getBy(name,str){	//name是属性名,str是属性值
		
		var aEle = document.getElementsByTagName("*");
		var aTarget = [];
		for(var i=0; i<aEle.length; i++){
			if(aEle[i].getAttribute(name)==str)
				aTarget.push(aEle[i]);	
		}
		return aTarget;
}	

//数组去重:

function distinct(arr){
	
	var ar=new Array();
	for(var i=0;i<arr.length;i++)
	{	
		if(ar.indexOf(arr[i])==-1)
		{
			ar.push(arr[i]);
		}
	}
	return ar;
}
//事件绑定的兼容性写法
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		return obj.addEventListener(type,fn,false);	
	}else if(obj.attachEvent){
		return obj.attachEvent("on"+type,fn);	
	}else{
		obj["on"+type]=null;	
	}
}
//处理IE中this指向的问题
function foo(e){
var evt=e||event;
if(evt.srcElement){
	alert(evt.srcElement);
	var _this=evt.srcElement;	
}else{
	var _this=this;
}
	this.className="blue";//举例说明的
}
//设置cookie的封装函数：
function setCookie(name,value,iDate){
	var date=new Date();
	date.setDate(date.getDate()+iDate);
	document.cookie = name + "=" +encodeURI(value) +";expires="+date;
}
function getCookie(name){
			var str=decodeURI(document.cookie);
			var arr=str.split("; ");
			for(var i = 0;i < arr.length; i++){
				var arr2 = arr[i].split("=");
				if(arr2[0]==name){
					return decodeURI(arr2[1]);
				}
			}
			return "";	
		}







