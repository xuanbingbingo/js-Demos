// JavaScript Document
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
		}
		else{
			return getComputedStyle(obj,false)[attr]
				}
	
	}

function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		if(attr=='opacity'){
			var iCur=parseInt(parseFloat(getStyle(obj,attr))*100)
			}
			else{
				var iCur=parseInt(getStyle(obj,attr))
				//document.title=iCur
				}
		var iSpeed=(iTarget-iCur)/6;
		iSpeed>0? iSpeed=Math.ceil(iSpeed): iSpeed=Math.floor(iSpeed);
		
		
		if(iCur==iTarget){
			clearInterval(obj.timer)
			if(fn()){
				fn()
				}
			
			}
			else{
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity'+iCur+iSpeed+')';
					obj.style.opacity=(iCur+iSpeed)/100
					}
					else{
						obj.style[attr]=(iCur+iSpeed)+'px'
						
						
						}
				
				}
		
		
		},30)
	
	
	}
	window.onload=function(){
		var oDiv=document.getElementById('div1');
		oDiv.onmouseover=function(){
		startMove(oDiv,'width',300,function(){
			startMove(oDiv,'height',300,function(){
				startMove(oDiv,'opacity',100)
				})
			})
		}
	}
