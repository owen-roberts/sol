console.log("loaded app.js");

const bodies = [
    {
        distance: 0,
        size: 50,
        color: '#FFCC33'
    },
    {
        distance: 100,
        size: 10,
        color: '#97979F'
    }
];

function resize()
{
    canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth; 
}

function drawCircle(x, y, r, color){
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();  
}

function drawPlanet(distance, size, color){
    centerHeight = canvas.height / 2;
    centerWidth = canvas.width / 2;
    drawCircle(centerWidth, centerHeight + distance, size, color);
}

function draw(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');

    resize();
    bodies.forEach(planet => {
        drawPlanet(planet.distance, planet.size, planet.color);
    });
}
draw();

window.onresize = function(){
    return draw();
}






