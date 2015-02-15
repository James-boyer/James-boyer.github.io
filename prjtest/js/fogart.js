 function pig(){
   var u = document.getElementById("urls");
   var a = document.getElementById("amount");
   var i = 0;
   u.innerHTML="";
   for(i = 0;i<a.value;i++){
     u.innerHTML +='<input type="text" name="url'+i+'" ></input>';
   }
}
 
 function tig(){
var t = document.getElementById("val");

var b = document.getElementById("cral").value / 100;
t.innerHTML = "value: "+ b;
var a = document.getElementById("iframe");
  a.style.MozTransform = "scale("+b+","+b+")";
a.style.webkitTransform = "scale("+b+","+b+")";
a.style.OTransform = "scale("+b+","+b+")";
a.style.msTransform = "scale("+b+","+b+")";
a.style.transform = "scale("+b+","+b+")"; 
}
function increaseWidth(){

var a = document.getElementById("iframe");
//a.style.webkitTransform = "scale(1.00,1.00)";
var st = window.getComputedStyle(a, null);

 var value = st.getPropertyValue("-webkit-transform");
  document.getElementById("foot").innerHTML = "cok";
 value = value.split('(')[1];
 value = value.split(')')[0];
 value = value.split(',');
 
 document.getElementById("foot").innerHTML = value;
 
 
 /* a.style.MozTransform = "scale("+b+","+b+")";
a.style.webkitTransform = "scale("+b+","+b+")";
a.style.OTransform = "scale("+b+","+b+")";
a.style.msTransform = "scale("+b+","+b+")";
a.style.transform = "scale("+b+","+b+")"; */
}

