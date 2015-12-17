function Animator(element)
 {
	this.el = element;
	var that = this;

	this.animate = function(value) 
	{
		var counter = 0;
		var intervalId = setInterval(function() 
		{
			counter++;
			//i++;
			
			
			/*var current = step * i;
			if(i>=40){
				i=0;
			
			}
			console.log(i);*/
			//console.log(current);
			// element.innerHTML = current;
			console.log(i);
			if(i==3)
			{
				element.style.left=counter*(-5)+((-(i-1))*100)+'%';;
			}
			else
			{
			element.style.left =counter*(-5)+((-(i-1))*100)+'%';
			}//element.style[cssProperty]=current+'px';
			//console.log(parseInt(style.getPropertyValue(cssProperty)) + step);
			if (counter >= 20)
				clearInterval(intervalId);
		}, 50);
	}
        
			 
		 this.stop = function()
		 {
			
	  
		}

		 
      	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	
	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {

	}

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}

 }