function Animator(element)
 {
	this.el = element;
	var that = this;
	var intervalId;
	var left;
	this.animation=false;
	this.animate = function(value,step) 
	{
		var counter = 0;
		that.animation=true;
		intervalId = setInterval(function() 
		{
			counter++;
			
			left=counter*(step)+((-(value))*100);

			element.style.left =left+'%';
			if (counter >= 20)
			{
				clearInterval(intervalId);
				that.animation=false;
			}
		}, 50);
	}
        
			 
	this.stop = function()
	{
		clearInterval(intervalId);
		that.animation=false;
				
			

	}

    // should stop the animation in current position
	
	// should stop the animation and element's properties should be at "end" value
	this.finish = function(value) 
	{
		
		
			var interval = setInterval(function()
			{
			if(left%100==0)
			{
				clearInterval(interval);


				
			}
			else
			{
				left=left+value;
				that.el.style.left=left+'%';
			}

			},1);
	}	

}