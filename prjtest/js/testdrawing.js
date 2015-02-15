<!DOCTYPE html>
<html>
<head>
    <title>DEMO drawing with undo</title>
	<link type = "text/css" rel = "stylesheet" href="css/reset.css"></link>
    <script src="js/easeljs-0.8.0.min.js"></script>
    <script src="js/testdrawer.js">
    var stage, oX, oY, size, color, start, i
		var drawing = [];
		var LeftArrow = 37;
		var SHIFT = 16;
		//var dragmode = false;
		function keydown(event) {
		  //removes previous drawing
      if(event.keyCode == LeftArrow){
		    stage.removeChild(drawing[i - 1]);
			  i--;
		  }
		  stage.update();
    }

    function init() {
      stage = new createjs.Stage("demoCanvas");
			stage.enableDOMEvents(true);
			
			color = "#0FF";
			size = 5;
      start = false;
			i = 0;
			
			// adding new shape to canvas
			stage.on("stagemousedown",function(evt) {
			    start = true;
			    drawing[i] = new createjs.Shape();
			    stage.addChild(drawing[i]);
			})
			
			// moving on
		  stage.on("stagemouseup",function(evt) {
			    start = false;
			    i++;
			})
			
			stage.on("stagemousemove",function(evt) {
			 
			  if(oX && start){
			    drawing[i].graphics.beginStroke(color)
                            .setStrokeStyle(size,"round")
                            .moveTo(oX,oY)
                            .lineTo(evt.stageX,evt.stageY);
				 
                 stage.update();	
               }	
               oX = evt.stageX;
               oY = evt.stageY;				   
			})
            
		  this.document.onkeydown = keydown;
      stage.update();
      }
		
    </script>
</head>
<body onload="init();">
    <canvas id="demoCanvas" width="1280" height="720">
        Beep bop
    </canvas>
</body>
</html>
