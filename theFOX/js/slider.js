
		 var screenWidth=window.innerWidth;
		 var sliderWrapper=document.getElementsByClassName("slider-wrapper")[0];
		 var sliderLong=document.getElementsByClassName("slider-long")[0];
		 
		 var slides=document.getElementsByClassName("slides");
		 sliderLong.style.width=(100*slides.length)+'%';
		 
		 var percent=100/slides.length +'%';
		 
		 var screenHeight=window.innerHeight;
		 
		 
		 	slides[0].style.width=percent;
			slides[1].style.width=percent;
			slides[2].style.width=percent;
			slides[3].style.width=percent;
			slides[4].style.width=percent;
			var id;
			var active=0;
			var animator=new Animator(sliderLong);
			function move()
			{	if(active>slides.length-2) active=0;
				var sliderLong=document.getElementsByClassName("slider-long")[0];
			    animator.animate(active,-5);
			    active++;
				
			}
			var id=setInterval(move,3000);

			function moveLeft()
			{
				if(active==0)
				{
				 active=slides.length-1; 
				}
				
				window.clearInterval(id);
				if(animator.animation==true)
				{
					animator.stop();
					animator.finish(5);

				}
				else
				{
					animator.animate(active,5);
				}
				active=active-1;
			    id = window.setInterval(move,3000);
				
			}
			function moveRight()
			{
				 
				if(active==slides.length-1) active=0;
				window.clearInterval(id);
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
		
			   id = window.setInterval(move,3000);

				active=active+1;	
				
			}
		 
		