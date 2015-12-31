 		var screenWidth=window.innerWidth;
		 var sliderWrapper=document.getElementsByClassName("slider-wrapper")[0];
		 var sliderLong=document.getElementsByClassName("slider-long")[0];
		 
		 var slides=document.getElementsByClassName("slides");
		 sliderLong.style.width=(100*slides.length)+'%';
		 
		 var percent=100/slides.length +'%';
		 
		
		 	slides[0].style.width=percent;
			slides[1].style.width=percent;
			slides[2].style.width=percent;
			slides[3].style.width=percent;
			slides[4].style.width=percent;
			
			var active=0;
			var animator=new Animator(sliderLong);
			function move()
			{	if(active>slides.length-2) active=0;
				var sliderLong=document.getElementsByClassName("slider-long")[0];
			    animator.animate(active,-5);
			    active++;
				
			}
			var mainid=setInterval(move,3000);

			function moveLeft()
			{
				if(active==0)
				{
				 active=slides.length-1; 
				}
				
				clearInterval(mainid);
				
				if(animator.animation==true)
				{
					animator.stop();
					animator.finish(5);

				}
				else
				{
					animator.animate(active,5);
				}
				active-=1;
			     mainid= setInterval(move,3000);
				
			}
			function moveRight()
			{
				 
				if(active==slides.length-1) active=0;
				window.clearInterval(mainid);
				if(animator.animation==true)
				{ 
					animator.stop();
					animator.finish(-5);
					animator.animate(active,-5);
				}
				else
				{
					animator.animate(active,-5);
				}
		
			   mainid= setInterval(move,3000);

				active=active+1;	
				
			}
		 
		