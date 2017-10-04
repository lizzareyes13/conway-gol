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

function updateGrid() {//perform one iteration of grid update
  for(var j = 1; j < gridHeight - 1; j++) {//iterate through rows
    for(var k = 1; k < gridWidth - 1; k++) {//iterate through columns
      var totalCells = 0;
      //add up the total values for the surrounding cells
      totalCells += theGrid[j-1][k-1];//top left
      totalCells += theGrid[j-1][k];//top center
      totalCells += theGrid[j-1][k+1];//top right
      totalCells += theGrid[j][k-1];//middle left
      totalCells += theGrid[j][k+1];//middle right
      totalCells += theGrid[j+1][k-1];//bottom left
      totalCells += theGrid[j+1][k];//bottom center
      totalCells += theGrid[j+1][k+1];//bottom right
      //apply the rules to each cell
      if(theGrid[j][k] === 0){
        switch(totalCells){
          case 3:
          mirrorGrid[j][k] = 1;//if cell is dead and has 3 neighbors switch it on
          break;
          default;
          mirrorGrid[j][k] = 0;//otherwise leave it dead
        }
      }else if(theGrid[j][k] === 1) {//apply rules to living cell
        switch(totalCells){
          case 0:
          case 1:
          mirrorGrid[j][k] = 0;//die of loneliness(Sad!)
          break;
          case 2:
          case 3:
          mirrorGrid[j][k] = 1;//carry on living(like a bahs)
          break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          mirrorGrid[j][k] = 0;//die of overcrowding(also Sad!)
          break;
        }
      }
    }
  }
  //copy mirrorGrid to theGrid
  for(var j = 0;j < gridHeight; j++){//iterate through rows
    for(var k = 0; k < gridWidth; k++){//iterate through columns
      theGrid[j][k] = mirrorGrid[j][k];
    }
  }
}
function tick(){
  drawGrid();
  updateGrid();
  requestAnimationFrame(tick);
