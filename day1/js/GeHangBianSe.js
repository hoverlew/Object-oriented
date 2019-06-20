function toggleBg(){
	this.elements=[];
};
toggleBg.prototype={
	init:function(n){
		for(var i=1;i<=n;i++){
			var oInput=document.createElement('input');
			oInput.type='button';
			oInput.value='按钮'+i;
			this.elements.push(oInput);
		}
		return this;
	},
	createNode:function(){
		for(var i=0;i<this.elements.length;i++){
			document.body.appendChild(this.elements[i]);
		}
		return this;
	},
	setBtnColor:function(){
		for(var i=0;i<this.elements.length;i++){
			if(i%2==0){
				this.elements[i].className='even-color';
			}else{
				this.elements[i].className='odd-color';
			}
		}
		return this;
	},
	reCoverBg:function(){
		var _this=this;
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].onclick=function(){
				for(var j=0;j<_this.elements.length;j++){
					if(j%2==0){
						_this.elements[j].className='even-color';
					}else{
						_this.elements[j].className='odd-color';
					}
				}
				this.className='active';
			}
		}
		return this;
	}
};
window.onload=function(){
	new toggleBg().init(10).createNode().setBtnColor().reCoverBg();
}