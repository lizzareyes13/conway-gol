var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#0dff00";


// creating the grid
function createArray (rows) {
  var array = [];

  for(var i = 0; i < rows; i++) {
    array[i] = [];
  }
  return array;
}

// var grid = createArray(gridWidth);
//
// grid;

//populating the grid
function fillRandom () {
  for (var j = 0; j < gridHeight; j++) {
    for (var k = 0; k < gridWidth; k++) {
      var rawRandom = Math.random();
      var improvedNum = (rawRandom * 2);
      var randomBinary = Math.floor(improvedNum);
      if (randomBinary === 1) {
        theGrid[j][k] = 1;
      }else{
        theGrid[j][k] = 0;
      }
    }
  }
}


//drawing the grid on the screen
function drawGrid () {
  var c = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0,0,400,400);

  for ( var j = 1; j < gridHeight; j++) {
    for ( var k = 1; k < gridWidth; k++ ) {
      if (theGrid[j][k] === 1) {
        ctx.fillStyle = "#FF0000";

        ctx.fillRect(j,k,1,1);
        
      }
    }
  }
}
