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
