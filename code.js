var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b629c66-cc07-490c-9824-1b424d018f61"],"propsByKey":{"8b629c66-cc07-490c-9824-1b424d018f61":{"name":"bass_clef_1","sourceUrl":null,"frameSize":{"x":212,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"AwD0b9gj2uEF6bp.elIUd_MgaQwF_GCA","loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":300},"rootRelativePath":"assets/8b629c66-cc07-490c-9824-1b424d018f61.png"}}};
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

    var keyC=createSprite(40,200,50,200);
    var keyCsharp=createSprite(40,150,50,150);
    var keyD=createSprite(92,200,50,200);
    var keyE=createSprite(145,200,50,200);
    var keyEsharp=createSprite(105,150,50,150);
    var keyF=createSprite(200,200,50,200);
    var keyFsharp=createSprite(190,150,50,150);
    var keyG=createSprite(255,200,50,200);
    var keyGsharp=createSprite(250,150,50,150);
    var keyA=createSprite(310,200,50,200);
    var keyAsharp=createSprite(315,150,50,150);
    var keyB=createSprite(365,200,50,200);
    
function draw() {
  background("blue");
  keyC.shapeColor="white";
  keyCsharp.shapeColor="black"; 
  keyD.shapeColor="white";
  keyE.shapeColor="white";
  keyEsharp.shapeColor="black";
  keyF.shapeColor="white";
  keyFsharp.shapeColor="black";
  keyG.shapeColor="white";
  keyGsharp.shapeColor="black";
  keyA.shapeColor="white";
 keyAsharp.shapeColor="black";
  keyB.shapeColor="white";
  
  textSize(40);
  text("C",29,337);
  text("D",74,337);
  text("E",133,337);
  text("F",190,337);
  text("G",245,337);
  text("A",304,337);
  text("B",356,337);
  text("GRAND PIANO",74,30);

if(mousePressedOver(keyC)){
playSound( "assets/piano_middle_C.mp3");
  }
  if(mousePressedOver(keyCsharp)){
    playSound( "assets/piano_C_sharp.mp3");
  }
  if(mousePressedOver(keyD)){
  playSound( "assets/piano_D.mp3");
  }
  if(mousePressedOver(keyE)){
    playSound( "assets/piano_E.mp3");
  }
  if(mousePressedOver(keyF)){
    playSound( "assets/piano_F.mp3");
  }
  if(mousePressedOver(keyFsharp)){
    playSound( "assets/piano_F_sharp.mp3");
  }
  if(mousePressedOver(keyG)){
    playSound( "assets/piano_G.mp3");
  }
  if(mousePressedOver(keyGsharp)){
    playSound("assets/piano_G_sharp.mp3");
  }
  if(mousePressedOver(keyA)){
    playSound( "assets/piano_A.mp3");
  }
  if(mousePressedOver(keyAsharp)){
  playSound( "assets/piano_A_sharp.mp3");
  }
  if(mousePressedOver(keyB)){
    playSound( "assets/piano_B.mp3");
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
