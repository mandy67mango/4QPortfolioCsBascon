function plotPoint() {
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    in1.innerHTML = x0.value + " " + y0.value + " " + x.value + " " + y.value;
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.position = 'absolute';
    point.style.left = (x.value - x0.value + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (y.value - y0.value + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point);

    if (x.value > x0.value && y.value > y0.value){
      out1.innerHTML = "NE"
    }
    else if (x.value < x0.value && y.value < y0.value){
      out1.innerHTML = "SO"
    }
    else if (x.value > x0.value && y.value < y0.value){
      out1.innerHTML = "SE"
    }
    else if (x.value < x0.value && y.value > y0.value){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
}