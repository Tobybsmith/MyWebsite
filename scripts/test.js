let img;

function preload()
{
    img = loadImage('scripts/assets/obama.png');
}

function setup()
{
    createCanvas(400, 400);
    background(0);
}

function draw()
{
    image(img, 100, 100, 50, 50);
    fill(100);
    rect(300, 300, 50, 50);
}
