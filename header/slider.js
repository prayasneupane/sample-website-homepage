 var screenWidth=window.innerWidth;
		 var sliderWrapper=document.getElementsByClassName("slider-wrapper")[0];
		 var sliderLong=document.getElementsByClassName("slider-long")[0];
		 
		 var slides=document.getElementsByClassName("slides");
		 sliderLong.style.width=(100*slides.length)+'%';
		 
		 var percent=100/slides.length +'%';
		 
		 var screenHeight=window.innerHeight;
		 sliderWrapper.style.height=screenHeight+'px';
		 
		 			slides[0].style.width=percent;
			slides[1].style.width=percent;
			slides[2].style.width=percent;
			slides[3].style.width=percent;
			slides[4].style.width=percent;
			
			var i=0;
			var animator=new Animator(sliderLong);
			function move()
			{	if(i>slides.length-2) i=0;
				var sliderLong=document.getElementsByClassName("slider-long")[0];
			    animator.animate(i,-5);
			    i++;
				
			}
			var id=setInterval(move,3000);

			function moveLeft()
			{
				if(i==0)
				{
				 i=slides.length-1; 
				}
				
				window.clearInterval(id);
				if(animator.animation==true)
				{
					animator.stop();
					animator.finish(5);

				}
				else
				{
					animator.animate(i,5);
				}
				i=i-1;
			    id= setInterval(move,3000);
				
			}
			function moveRight()
			{
				 
				if(i==slides.length-1) i=0;
				window.clearInterval(id);
				if(animator.animation==true)
				{ 
					animator.stop();
					animator.finish(-5);
					animator.animate(i,-5);
				}
				else
				{
					animator.animate(i,-5);
				}
		
			   id= setInterval(move,3000);

				i=i+1;	
				
			}
		 
		