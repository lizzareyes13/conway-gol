var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

getElementById("canvas").mousedown(function(event) {
    lastMouseEvent = event;
    isMouseDown = true;
});

getElementById("canvas").mousemove(function(currentMouseEvent) {
    if(isMouseDown === true) {
      // ctx.lineJoin = 'round';
      // ctx.lineCap = 'round';
        context.beginPath();
        context.moveTo(lastMouseEvent.offsetX, lastMouseEvent.offsetY);
        context.lineTo(currentMouseEvent.offsetX, currentMouseEvent.offsetY);
        context.strokeStyle = "#0dff00";
        context.lineWidth = "4px";
        context.stroke();
        console.log(lastMouseEvent.offsetX, currentMouseEvent.offsetX);
        lastMouseEvent = currentMouseEvent;
    }
});

getElementById("canvas").mouseup(function() {
    isMouseDown = false;
});
