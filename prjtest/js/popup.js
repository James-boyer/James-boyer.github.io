function ShowPopup(hoveritem)
{
	hp = document.getElementById("img");

	// Set position of hover-over popup
	tp=hoveritem.offsetTop;
	lf=hoveritem.offsetLeft;
	tp=tp-hoveritem.offsetHeight-2;
	lf=lf+hoveritem.offsetWidth / 2 - hp.offsetWidth/2;
	hp.style.top = tp+"px";
	hp.style.left = lf+"px";

	// Set popup to visible
	hp.style.visibility = "Visible";
}

function HidePopup()
{
	hp = document.getElementById("img");
	hp.style.visibility = "Hidden";
}
function smallshit(){
  hp = document.getElementById("navigation");
  ht= document.getElementById("center");
  f= hp.style.width-5;
  hp.style.width=f;
  alert(f);
 // hp.style.width = hp.style.width - 5;
  
}