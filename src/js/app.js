console.log("loaded app.js");

var elapsedDays = 0;

const bodies = [
    {
        name: 'Mercury',
        color: '#97979F',
        distance: 100,
        size: 5,
        orbitalPeriod: 87.9691,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Venus',
        color: '#8B91A1',
        distance: 150,
        size: 5,
        orbitalPeriod: 224.701,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Earth',
        color: '#8CB1DE',
        distance: 200,
        size: 7,
        orbitalPeriod: 365.256,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Mars',
        color: '#D14009',
        distance: 250,
        size: 7,
        orbitalPeriod: 686.971,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Jupiter',
        color: '#D39C7E',
        distance: 325,
        size: 10,
        orbitalPeriod: 4332.59,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Saturn',
        color: '#C5AB6E',
        distance: 375,
        size: 9,
        orbitalPeriod: 10759.22,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Uranus',
        color: '#93B8BE',
        distance: 425,
        size: 8,
        orbitalPeriod: 30688.5,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        name: 'Neptune',
        color: '#6081FF',
        distance: 475,
        size: 8,
        orbitalPeriod: 60182,
        x: 0,
        y: 0,
        angle: 0
    },
];

function resize()
{
    canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth; 
}

function drawOrbit(x, y, r, color){
    cx = canvas.width / 2;
    cy = canvas.height / 2;

    context.beginPath();
    context.arc(cx + x, cy + y, r, 0, 2 * Math.PI, false);
    context.strokeStyle = color;
    context.stroke();
}

function drawPlanet(x, y, r, color){
    cx = canvas.width / 2;
    cy = canvas.height / 2;

    context.beginPath();
    context.arc(cx + x, cy + y, r, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();  
}

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawPlanet(0, 0, 50, '#FFCC33');

    bodies.forEach(planet => {
        drawOrbit(0, 0, planet.distance, planet.color);
        drawPlanet(planet.x, planet.y, planet.size, planet.color);

        planet.x = planet.distance * Math.sin(planet.angle * Math.PI / 180);
        planet.y = planet.distance * Math.cos(planet.angle * Math.PI / 180);
        planet.angle = planet.angle + (360 / planet.orbitalPeriod);
    });

    elapsedDays++;
    console.log(elapsedDays);
}

function init(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');

    resize();

    draw();
    setInterval(() => draw(), 30);
    window.onresize = (() => resize());
}







