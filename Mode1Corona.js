function createCorona(){
	
	if(frameCount % 100 === 0){
	 var randPos  = random(100,350);
     var corona = createSprite(player.x+550,randPos,10,10);
     corona.velocityX = frameCount/50*(-1);

	 var randImage = Math.round(random(1,3));

	
	
	switch(randImage){

	 case 1://image1
	 break;
	 case 2://image2
	 break;
     default://image3
	 break;

	}
	//enemy1.scale = 0.5;
    corona.lifetime = 500;
    coronaGroup.add(corona);
   }

}

function createMask(){
	//if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var mask = createSprite(player.x+450,randPos,10,10);
        mask.shapeColor = "blue";
        mask.setVelocity(Math.round(random(2,4))*(-1), Math.round(random(3,4)));
        if(frameCount % 3 === 0 ){
            mask.velocityX *= -1;
        }
        else{
            mask.velocityY *= -1;
        }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1://image1
		break;
		case 2://image2
		break;
		default://image3
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   mask.lifetime = 500;
	   maskGroup.add(mask);
	  //}
}

function createSanitizer(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var sanitizer = createSprite(player.x+490,randPos,10,10);
        sanitizer.shapeColor = "black";
        sanitizer.setVelocity(Math.round(random(2,5))*(-1), Math.round(random(3,5)));

        if(frameCount % 3 === 0 ){
            sanitizer.velocityX *= -1;
        }
         else{
            sanitizer.velocityY *= -1;
         }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1://image1
		break;
		case 2://image2
		break;
		default://image3
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   sanitizer.lifetime = 500;
	   sanitizerGroup.add(sanitizer);
	  //}
}

function createPPE(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var ppe = createSprite(player.x+450,randPos,10,10);
        ppe.shapeColor = "brown";
        ppe.setVelocity(Math.round(random(5,8)*(-1)), Math.round(random(4,7)));

        if(frameCount % 3 === 0 ){
            ppe.velocityX *= -1;
        }
        else{
            ppe.velocityY *= -1;
        }

        //ppe.addImage();
		var randImage = Math.round(random(1,3));
	   //enemy1.scale = 0.5;
	   ppe.lifetime = 500;
	   ppeGroup.add(ppe);
	  //}
}

function createAllies(){
    var rand = Math.round(random(1,6));

    switch(rand){
        //this method is called ripple effect or fallthrough
        case 1: 
        case 2:
        case 3:
               createMask();
                break;
        case 4:
        case 5:
               createSanitizer();
                break;
        default: createPPE();

    }
}

function mode1() {

	textSize(10);
  text("SCORE: "+ score ,camera.x-500,100);
  if(player.isTouching(maskGroup)){
	  score = score+10;
  }
  else 
  if(player.isTouching(sanitizerGroup)){
	score = score+10;
}
else
if(player.isTouching(ppeGroup)){
	score = score+10;
}

  camera.x = player.x;

  console.log(player.x);

  if(frameCount % 31 === 0){
	createAllies();
  }

  

  if(keyDown(UP_ARROW)){
	player.y = player.y-5;

  }

  if(keyDown(DOWN_ARROW)){
	player.y = player.y+5;
}

if(player.x === 1600){
	player.velocityX = 0;
}





  createCorona();

player.collide(edges[3]);
  
}