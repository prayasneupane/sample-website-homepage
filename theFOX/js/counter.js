function Counter(element,num)
{
	this.el=element;
	var that=this;
	this.isScrolledIntoView=function(el) 
	{
		el=document.getElementsByClassName("counter-text-number")[0];
    	var elemTop = el.getBoundingClientRect().top;
    	var elemBottom = el.getBoundingClientRect().bottom;

    	var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    	return isVisible;

	}
	this.movecounter=function()
	{
		var count=0;
	 	var istrue=that.isScrolledIntoView(that.el);
  	
  		if(istrue==true)
   		{
   			var y=setInterval(increase,2);
			function increase()
			{
	    		clearInterval(x);
		

				that.el.innerHTML=count;
				count+=10;
				
				if(count>=num) 
				{
					
					that.el.innerHTML=formatting(num);
					
					clearInterval(y);
				}
			}

   		}
  
	}
	var x=setInterval(that.movecounter,20);
	var formatting = function (val) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}