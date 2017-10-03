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
