var div1=document.getElementsByClassName("counter-text-number")[0];
var div2=document.getElementsByClassName("counter-text-number")[1];
var div3=document.getElementsByClassName("counter-text-number")[2];
var div4=document.getElementsByClassName("counter-text-number")[3];
var num1=document.getElementsByClassName("counter-text-number")[0].innerHTML;
var num2=document.getElementsByClassName("counter-text-number")[1].innerHTML;
var num3=document.getElementsByClassName("counter-text-number")[2].innerHTML;
var num4=document.getElementsByClassName("counter-text-number")[3].innerHTML;
console.log(num1);


		function isScrolledIntoView(el) {
		el=document.getElementsByClassName("counter-text-number")[0];
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;

}
function move(){
	var counter=0;
	 var x=isScrolledIntoView(div1);
   console.log(x);
   if(x==true)
   {
   	var y=setInterval(increase,2);
function increase()
{
	    clearInterval(x);
		

		div1.innerHTML=counter;
		div2.innerHTML=counter;
		div3.innerHTML=counter;
		div4.innerHTML=counter;
		counter++;
		if(counter>=100) clearInterval(y);
}

   }
  
}
var x=setInterval(move,20);
