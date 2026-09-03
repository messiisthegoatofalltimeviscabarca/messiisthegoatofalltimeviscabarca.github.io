
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(250,600,100,200)
createPlatform(150,700,100,100)
createPlatform(350,700,100,300)
createPlatform(500,500,100,50)
createPlatform(850,400,100,50)
createPlatform(1300,450,50,700)
createCollectable("trophy",1300,650)
createCollectable("copa",250,550,)
createCollectable("ball", 550,400);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 600,2000)
createCannon("bottom",350,2000)
createCannon ("top", 400,2000)
createCannon("right", 400,5000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
