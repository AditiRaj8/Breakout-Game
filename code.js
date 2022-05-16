var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2fc926d3-f8a0-4c77-8f9f-436c35043306","44ea0009-51df-40b4-b68c-1600bf2aed6e","b3f197ef-60a7-4dbd-9da7-62fd4a69770d","c2d9310f-009e-4d04-94e0-9b99b0c42f7c","8477e855-88bc-4df9-a15c-084f563726df","4d7698e0-f3d6-491d-8036-6dd6f6f1f128","600c3391-9bc4-4b59-9ead-2e4ffebfeee2","27c23dd8-e151-49a6-b54a-9a18d6d6aa2c","2f05fe98-afaa-4ef6-b2a3-f5936a60022d","e84061c5-3236-442f-8af9-d306dedc8ad5","b887a11d-d071-452f-bf72-615932f9a264","fcad20f6-fecf-4059-a655-a120bbb5b24c","90ba715a-f6c4-4ed6-8954-0760d3c6329e","ab813347-955c-4f7f-bdab-7f2d340ff0b9","e843f7a2-6730-463a-a8f1-63978bc9d8df","e08d433f-9d0c-4725-b520-64426a0bc4ce","767ef519-aeb1-4fa4-b5d4-347afde08526","8b990a06-981c-4f23-8abf-af583822e841","54c70ca9-00b2-4780-9a53-6ec20ee505b1","a3cb1752-dfec-4acf-b554-a7cece01c69d","472e7eed-8cfa-41f6-a635-1b2a43d02b28"],"propsByKey":{"2fc926d3-f8a0-4c77-8f9f-436c35043306":{"name":"alien_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HrAMVb0UAVU47lc2nT3gCdvX_jYryNLD/category_fantasy/alien_10.png","frameSize":{"x":269,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"HrAMVb0UAVU47lc2nT3gCdvX_jYryNLD","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":269,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HrAMVb0UAVU47lc2nT3gCdvX_jYryNLD/category_fantasy/alien_10.png"},"44ea0009-51df-40b4-b68c-1600bf2aed6e":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"b3f197ef-60a7-4dbd-9da7-62fd4a69770d":{"name":"robot_31_1","sourceUrl":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png","frameSize":{"x":322,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png"},"c2d9310f-009e-4d04-94e0-9b99b0c42f7c":{"name":"animalhead_leord_1pa","sourceUrl":"assets/api/v1/animation-library/gamelab/mSDfd.iwZWb3h_SRj1EFQXNZNb9L39wK/category_animals/animalhead_leopard.png","frameSize":{"x":396,"y":348},"frameCount":1,"looping":true,"frameDelay":2,"version":"mSDfd.iwZWb3h_SRj1EFQXNZNb9L39wK","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":348},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mSDfd.iwZWb3h_SRj1EFQXNZNb9L39wK/category_animals/animalhead_leopard.png"},"8477e855-88bc-4df9-a15c-084f563726df":{"name":"baboon_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a/category_animals/baboon.png","frameSize":{"x":364,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a/category_animals/baboon.png"},"4d7698e0-f3d6-491d-8036-6dd6f6f1f128":{"name":"gameplayadventure_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GSiC57fZPi3yBvLh1A6eKX_U1e7Gt.rb/category_fantasy/gameplayadventure_11.png","frameSize":{"x":327,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"GSiC57fZPi3yBvLh1A6eKX_U1e7Gt.rb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":327,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GSiC57fZPi3yBvLh1A6eKX_U1e7Gt.rb/category_fantasy/gameplayadventure_11.png"},"600c3391-9bc4-4b59-9ead-2e4ffebfeee2":{"name":"shell_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/274fL_0mUYVtTqsaBqDC__2OJAngxP93/category_aquatic_objects/shell_15.png","frameSize":{"x":400,"y":345},"frameCount":1,"looping":true,"frameDelay":2,"version":"274fL_0mUYVtTqsaBqDC__2OJAngxP93","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":345},"rootRelativePath":"assets/api/v1/animation-library/gamelab/274fL_0mUYVtTqsaBqDC__2OJAngxP93/category_aquatic_objects/shell_15.png"},"27c23dd8-e151-49a6-b54a-9a18d6d6aa2c":{"name":"alien_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","frameSize":{"x":365,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"2f05fe98-afaa-4ef6-b2a3-f5936a60022d":{"name":"virus02_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6Dca8jE5wnhLZAP7RrOY_Ea47ot6g1F5/category_germs/virus02_09.png","frameSize":{"x":396,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"6Dca8jE5wnhLZAP7RrOY_Ea47ot6g1F5","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6Dca8jE5wnhLZAP7RrOY_Ea47ot6g1F5/category_germs/virus02_09.png"},"e84061c5-3236-442f-8af9-d306dedc8ad5":{"name":"monster_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png","frameSize":{"x":339,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"sbHblZVG76lVwv_v9hNs_iyDImtykKTh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":339,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sbHblZVG76lVwv_v9hNs_iyDImtykKTh/category_fantasy/monster_07.png"},"b887a11d-d071-452f-bf72-615932f9a264":{"name":"donut_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a2Xc39b6s5gmFIkiWJFtjOgeTHSgLDdd/category_food/donut_12.png","frameSize":{"x":362,"y":367},"frameCount":1,"looping":true,"frameDelay":2,"version":"a2Xc39b6s5gmFIkiWJFtjOgeTHSgLDdd","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":367},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a2Xc39b6s5gmFIkiWJFtjOgeTHSgLDdd/category_food/donut_12.png"},"fcad20f6-fecf-4059-a655-a120bbb5b24c":{"name":"pupilportrait_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EC7lJmeMOdIYDitYipwxFPaHXD1AWGcN/category_faces/pupilportrait_12.png","frameSize":{"x":390,"y":379},"frameCount":1,"looping":true,"frameDelay":2,"version":"EC7lJmeMOdIYDitYipwxFPaHXD1AWGcN","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":379},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EC7lJmeMOdIYDitYipwxFPaHXD1AWGcN/category_faces/pupilportrait_12.png"},"90ba715a-f6c4-4ed6-8954-0760d3c6329e":{"name":"ducky_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png","frameSize":{"x":395,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png"},"ab813347-955c-4f7f-bdab-7f2d340ff0b9":{"name":"cactus_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3rgTZuYQvQmKa2v_StGG3Yp369cx.REH/category_video_games/cactus_02.png","frameSize":{"x":399,"y":377},"frameCount":1,"looping":true,"frameDelay":2,"version":"3rgTZuYQvQmKa2v_StGG3Yp369cx.REH","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":377},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3rgTZuYQvQmKa2v_StGG3Yp369cx.REH/category_video_games/cactus_02.png"},"e843f7a2-6730-463a-a8f1-63978bc9d8df":{"name":"robot_29_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EqZrj_qUhLdEhHlnFZx2TNvZ7FohqIHD/category_robots/robot_29.png","frameSize":{"x":394,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"EqZrj_qUhLdEhHlnFZx2TNvZ7FohqIHD","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EqZrj_qUhLdEhHlnFZx2TNvZ7FohqIHD/category_robots/robot_29.png"},"e08d433f-9d0c-4725-b520-64426a0bc4ce":{"name":"rpgcharacter_22_1","sourceUrl":"assets/api/v1/animation-library/gamelab/s3CMX3lNceiwfCDYps2OAKMI60TSsYDQ/category_fantasy/rpgcharacter_22.png","frameSize":{"x":236,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"s3CMX3lNceiwfCDYps2OAKMI60TSsYDQ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/s3CMX3lNceiwfCDYps2OAKMI60TSsYDQ/category_fantasy/rpgcharacter_22.png"},"767ef519-aeb1-4fa4-b5d4-347afde08526":{"name":"animalhead_greyowl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MKl.2pfq3LH9ip0e1k9O.zS7n.gEZL8c/category_animals/animalhead_greyowl.png","frameSize":{"x":392,"y":264},"frameCount":1,"looping":true,"frameDelay":2,"version":"MKl.2pfq3LH9ip0e1k9O.zS7n.gEZL8c","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":264},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MKl.2pfq3LH9ip0e1k9O.zS7n.gEZL8c/category_animals/animalhead_greyowl.png"},"8b990a06-981c-4f23-8abf-af583822e841":{"name":"volleyball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JTd581LwNfOIZ0FzKo.ais_jFYPyV4_G/category_sports/volleyball.png"},"54c70ca9-00b2-4780-9a53-6ec20ee505b1":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"a3cb1752-dfec-4acf-b554-a7cece01c69d":{"name":"curtain_straight_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh/category_household_objects/curtain_straight.png","frameSize":{"x":256,"y":80},"frameCount":1,"looping":true,"frameDelay":2,"version":"H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":80},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H8mjQMdCBFlcETVCas0Ga8L5N9I2MDmh/category_household_objects/curtain_straight.png"},"472e7eed-8cfa-41f6-a635-1b2a43d02b28":{"name":"blueberry_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq/category_food/blueberry.png","frameSize":{"x":378,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iR6zWsM3GiZdBw8vf5doODdBQNkDf_Gq/category_food/blueberry.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25, 75,50,50);
box1.setAnimation("alien_10_1");
box1.scale=0.1;

var box2 = createSprite(75, 75,50,50);
box2.setAnimation("gameplaywacky_13_1");
box2.scale=0.1;

var box3 = createSprite(125, 75,50,50);
box3.setAnimation("robot_31_1");
box3.scale=0.1;

var box4 = createSprite(175, 75,50,50);
box4.setAnimation("baboon_1");
box4.scale=0.1;

var box5 = createSprite(225, 75,50,50);
box5.setAnimation("gameplayadventure_11_1");
box5.scale=0.1;

var box6 = createSprite(275, 75,50,50);
box6.setAnimation("shell_15_1");
box6.scale=0.1;

var box7 = createSprite(325, 75,50,50);
box7.setAnimation("alien_01_1");
box7.scale=0.1;

var box8 = createSprite(375, 75,50,50);
box8.setAnimation("virus02_09_1");
box8.scale=0.1;

var box9 = createSprite(25, 125,50,50);
box9.setAnimation("virus02_09_1");
box9.scale=0.1;

var box10 = createSprite(75, 125,50,50);
box10.setAnimation("donut_12_1");
box10.scale=0.1;

var box11 = createSprite(125, 125,50,50);
box11.setAnimation("pupilportrait_12_1");
box11.scale=0.1;

var box12 = createSprite(175, 125,50,50);
box12.setAnimation("ducky_1");
box12.scale=0.1;

var box13 = createSprite(225, 125,50,50);
box13.setAnimation("blueberry_1");
box13.scale=0.1;

var box14 = createSprite(275, 125,50,50);
box14.setAnimation("robot_29_1");
box14.scale=0.1;

var box15 = createSprite(325, 125,50,50);
box15.setAnimation("rpgcharacter_22_1");
box15.scale=0.1;

var box16 = createSprite(375, 125,50,50);
box16.setAnimation("animalhead_greyowl_1");
box16.scale=0.1;

var ball = createSprite(200, 250,20,20);
ball.setAnimation("volleyball_1");
ball.scale=0.1;

var paddle = createSprite(200, 350,100,20);
paddle.setAnimation("curtain_straight_1");
paddle.scale=0.4;

var score=0;

var gamestate="start";

function draw() {
background("pink");

if (gamestate==="start") {
textSize(20);
fill("darkgreen");
text("Welcome! Press space to start", 80, 200);
 
//moving ball when space key is pressed
if (keyDown("space")) {
 ball.velocityX=4;
ball.velocityY=4; 

gamestate="play";
  }                 
}


textSize(20);
fill("black");

text("Points-"+score, 270, 35);

if (gamestate==="play") {
//Moving paddle with mouse                                
 paddle.x=World.mouseX;

createEdgeSprites();
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(paddle);
                                
if (ball.isTouching(box1)) {
box1.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);

  }
if (ball.isTouching(box2)) {
box2.destroy();
 score=score+1;
playSound("assets/category_board_games/break.mp3", false); 
    }
if (ball.isTouching(box3)) {
box3.destroy();
score=score+1;  
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box4)) {
box4.destroy();
score=score+1;
playSound("assets/category_board_games/break.mp3", false);
    }        
 if (ball.isTouching(box5)) {
box5.destroy();
score=score+1;
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box6)) {
box6.destroy();
score=score+1;
playSound("assets/category_board_games/break.mp3", false);
    }
if (ball.isTouching(box7)) {
box7.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box8)) {
box8.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
    }         
 if (ball.isTouching(box9)) {
box9.destroy();
score=score+1;
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box10)) {
box10.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
    }
if (ball.isTouching(box11)) {
box11.destroy();
score=score+1;
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box12)) {
box12.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
    }        
 if (ball.isTouching(box13)) {
box13.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box14)) {
box14.destroy();
score=score+1;  
playSound("assets/category_board_games/break.mp3", false);
    }
if (ball.isTouching(box15)) {
box15.destroy();
 score=score+1; 
 playSound("assets/category_board_games/break.mp3", false);
  }
if (ball.isTouching(box16)) {
box16.destroy();
score=score+1; 
playSound("assets/category_board_games/break.mp3", false);
    }            
    
if (score===16 || ball.isTouching(bottomEdge)) {
gamestate="end";      
    }
        
}

if (gamestate==="end") {
textSize(20);
fill("black");
text("Game over! Your score is "+score, 110, 200);
                
}

drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
