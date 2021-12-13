var x1;

var y1;

var x2;

var y2;

var speed;

var cw;

var cx1;

var cy1;

var cx2;

var cy2;

var ccx;

var ccy;

var circle1;

var circle2;

var circle1a;

var circle2a;

var circlefinished;

var rainbow;

var down;

var smoothness;

// Colour Variables
var B;

var R;

var G;

var C;

var Bl;

var W;

var Y;

var P;

var O;

var Cy;

var Pk;

var Dg;

var Br;

var T;

var Rb;

// Coloured Box Loaction Variables
var greenX;

var greenY;

var redX;

var redY;

var blueX;

var blueY;

var clearX;

var clearY;

var blackX;

var blackY;

var whiteX;

var whiteY;

var yellowX;

var yellowY;

var purpleX;

var purpleY;

var rainbowX;

var rainbowY;

var orangeX;

var orangeY;

var cyanX;

var cyanY;

var pinkX;

var pinkY;

var dgreenX;

var dgreenY;

var brownX;

var brownY;

var taupeX;

var taupeY;

var circleX;

var circleY;

// For strokeWeight Changes Later
var weight;

// For Quit Button
var quitX;

var quitY;

// For strokeWeight changer
var weightpX;

var weightpY;

var weightmX;

var weightmY;

// For Smoothness Changer
var smoothmX;

var smoothmY;

var smoothpX;

var smoothpY;

// For Position of Smoothness Meter
var textX;

var textY;

var sIndicX;

var sIndicY;

var parabX;

var parabY;

// "Thickness" Title
var thickX;

var thickY;

// Brush preview
var prevX;

var prevY;

var F;

function setup() {
    initializeFields();
    background(255, 255, 255);
    noStroke();
    createCanvas(1200, 600);
    rectMode(CENTER);
    // Smoothness Indicator Font
}

function draw() {
    // }
    if (circle1a) {
        circle1 = true;
        circle1a = false;
    }
    if (circle2a == true) {
        circle2 = true;
        circle2a = false;
    }
    ccx = (cx1 + cx2) / 2;
    ccy = (cy1 + cy2) / 2;
    cw = sqrt(sq(cx1 - cx2) + sq(cy1 - cy2));
    if (circlefinished) {
        fill(C);
        ellipse(ccx, ccy, cw, cw);
        fill(255, 255, 255);
        circlefinished = false;
    }
    // How the Rainbow Brush Chooses Colour
    Rb = color(255 - mouseX + 60 + speed, 255 - mouseY + 20 + speed, 255 - speed + 60);
    // Rb = color(sq(speed),sqrt(speed)*15,mouseX*mouseY/1000);
    speed = sqrt(sq(x2 - mouseX) + sq(y2 - mouseY));
    // Smoothess Equation
    x1 = x1 - (x1 - mouseX) / (smoothness + speed / 25);
    y1 = y1 - (y1 - mouseY) / (smoothness + speed / 25);
    if (// The Actual Drawing Part
    mouseIsPressed) {
        if (down == false) {
            down = true;
            x1 = mouseX;
            y1 = mouseY;
            x2 = x1;
            y2 = y1;
        }
        if (C == W) {
            // The Eraser
            strokeWeight(weight + 20);
            stroke(C);
            // line(mouseX, mouseY, pmouseX, pmouseY);
            line(x2, y2, x1, y1);
        } else {
            // The Rainbow Brush
            if (rainbow == true) {
                strokeWeight(weight);
                stroke(Rb);
                // line(mouseX, mouseY, pmouseX, pmouseY);
                line(x2, y2, x1, y1);
            } else {
                // Standard Drawing Modes
                strokeWeight(weight);
                stroke(C);
                // line(mouseX, mouseY, pmouseX, pmouseY);
                line(x2, y2, x1, y1);
            }
        }
        // strokeWright Changer (Increasing)
        if (mouseX > (weightpX - 15) && mouseX < (weightpX + 15) && mouseY > (weightpY - 15) && mouseY < (weightpY + 15)) {
            weight = weight + 1;
            if (weight > 55) {
                weight = 55;
            }
        }
        // strokeWright Changer (deeasing)
        if (mouseX > (weightmX - 15) && mouseX < (weightmX + 15) && mouseY > (weightmY - 15) && mouseY < (weightmY + 15)) {
            fill(255, 255, 255);
            stroke(255, 255, 255);
            weight = weight - 1;
            if (weight < 1) {
                weight = 1;
            }
        }
        x2 = x2 - (x2 - x1);
        y2 = y2 - (y2 - y1);
    // x2 = x1;
    // y2 = y1;
    }
    // Box that Contains Everything
    strokeWeight(1);
    stroke(160, 160, 160);
    rect(0, 600, 650, 400);
    stroke(0, 0, 0);
    ellipse(parabX, parabY, 30, smoothness + 10);
    stroke(0, 0, 0, 0);
    rect(parabX, parabY + 50, 200, 100);
    fill(255, 255, 255);
    stroke(0, 0, 0, 0);
    ellipse(prevX, prevY, weight + 3, weight + 3);
    stroke(160, 160, 160);
    if (rainbow == true) {
        fill(Rb);
    } else {
        fill(C);
    }
    fill(0, 0, 0);
    // Smoothness text and numbering system
    text(smoothness, sIndicX, sIndicY);
    if (rainbow == true) {
        fill(Rb);
    } else {
        fill(C);
    }
    ellipse(prevX, prevY, weight, weight);
    // Colour Picker
    stroke(160, 160, 160);
    // Red
    fill(R);
    rect(redX, redY, 30, 30);
    // Green
    fill(G);
    rect(greenX, greenY, 30, 30);
    // Blue
    fill(B);
    rect(blueX, blueY, 30, 30);
    // Black
    fill(Bl);
    rect(blackX, blackY, 30, 30);
    // White
    fill(W);
    rect(whiteX, whiteY, 30, 30);
    // Yellow
    fill(Y);
    rect(yellowX, yellowY, 30, 30);
    // Purple
    fill(P);
    rect(purpleX, purpleY, 30, 30);
    // Rainbow
    fill(Rb);
    rect(rainbowX, rainbowY, 30, 30);
    // Orange
    fill(O);
    rect(orangeX, orangeY, 30, 30);
    // Cyan
    fill(Cy);
    rect(cyanX, cyanY, 30, 30);
    // Pink
    fill(Pk);
    rect(pinkX, pinkY, 30, 30);
    // Dark Green
    fill(Dg);
    rect(dgreenX, dgreenY, 30, 30);
    // Brown
    fill(Br);
    rect(brownX, brownY, 30, 30);
    // Taupe
    fill(T);
    rect(taupeX, taupeY, 30, 30);
    // Circle Tool
    fill(255);
    ellipse(circleX, circleY, 30, 30);
    // Clear Button
    fill(255, 255, 255);
    rect(clearX, clearY, 30, 30);
    line(clearX - 10, clearY - 10, clearX + 10, clearY + 10);
    line(clearX + 10, clearY - 10, clearX - 10, clearY + 10);
    // Quit button
    stroke(255, 0, 0);
    rect(quitX, quitY, 30, 30);
    line(quitX - 10, quitY - 10, quitX + 10, quitY + 10);
    line(quitX + 10, quitY - 10, quitX - 10, quitY + 10);
    // Weight changer maker (+)
    stroke(160, 160, 160);
    line(weightpX - 15, weightpY, weightpX + 15, weightpY);
    line(weightpX, weightpY - 15, weightpX, weightpY + 15);
    line(weightmX - 15, weightmY, weightmX + 15, weightmY);
    // Weight changer maker (-)
    stroke(50, 50, 50);
    line(smoothmX - 15, smoothmY, smoothmX + 15, smoothmY);
    line(smoothmX, smoothmY - 15, smoothmX, smoothmY + 15);
    line(smoothpX - 15, smoothpY, smoothpX + 15, smoothpY);
}

function mousePressed() {
    if (mouseX > (redX - 15) && mouseX < (redX + 15) && mouseY > (redY - 15) && mouseY < (redY + 15)) {
        C = R;
        rainbow = false;
    }
    if (mouseX > (blueX - 15) && mouseX < (blueX + 15) && mouseY > (blueY - 15) && mouseY < (blueY + 15)) {
        C = B;
        rainbow = false;
    }
    if (mouseX > (greenX - 15) && mouseX < (greenX + 15) && mouseY > (greenY - 15) && mouseY < (greenY + 15)) {
        C = G;
        rainbow = false;
    }
    if (mouseX > (clearX - 15) && mouseX < (clearX + 15) && mouseY > (clearY - 15) && mouseY < (clearY + 15)) {
        background(255, 255, 255);
    }
    if (mouseX > (blackX - 15) && mouseX < (blackX + 15) && mouseY > (blackY - 15) && mouseY < (blackY + 15)) {
        C = Bl;
        rainbow = false;
    }
    if (mouseX > (whiteX - 15) && mouseX < (whiteX + 15) && mouseY > (whiteY - 15) && mouseY < (whiteY + 15)) {
        C = W;
        rainbow = false;
    }
    if (mouseX > (yellowX - 15) && mouseX < (yellowX + 15) && mouseY > (yellowY - 15) && mouseY < (yellowY + 15)) {
        C = Y;
        rainbow = false;
    }
    if (mouseX > (purpleX - 15) && mouseX < (purpleX + 15) && mouseY > (purpleY - 15) && mouseY < (purpleY + 15)) {
        C = P;
        rainbow = false;
    }
    if (mouseX > (rainbowX - 15) && mouseX < (rainbowX + 15) && mouseY > (rainbowY - 15) && mouseY < (rainbowY + 15)) {
        rainbow = true;
    }
    if (mouseX > (orangeX - 15) && mouseX < (orangeX + 15) && mouseY > (orangeY - 15) && mouseY < (orangeY + 15)) {
        C = O;
        rainbow = false;
    }
    if (mouseX > (cyanX - 15) && mouseX < (cyanX + 15) && mouseY > (cyanY - 15) && mouseY < (cyanY + 15)) {
        C = Cy;
        rainbow = false;
    }
    if (mouseX > (pinkX - 15) && mouseX < (pinkX + 15) && mouseY > (pinkY - 15) && mouseY < (pinkY + 15)) {
        C = Pk;
        rainbow = false;
    }
    if (mouseX > (dgreenX - 15) && mouseX < (dgreenX + 15) && mouseY > (dgreenY - 15) && mouseY < (dgreenY + 15)) {
        C = Dg;
        rainbow = false;
    }
    if (mouseX > (brownX - 15) && mouseX < (brownX + 15) && mouseY > (brownY - 15) && mouseY < (brownY + 15)) {
        C = Br;
        rainbow = false;
    }
    if (mouseX > (taupeX - 15) && mouseX < (taupeX + 15) && mouseY > (taupeY - 15) && mouseY < (taupeY + 15)) {
        C = T;
        rainbow = false;
    }
    if (mouseX > (circleX - 15) && mouseX < (circleX + 15) && mouseY > (circleY - 15) && mouseY < (circleY + 15)) {
        circle1a = true;
        rainbow = false;
    }
    if (circle1 == true) {
        cx1 = mouseX;
        cy1 = mouseY;
        circle2a = true;
        circle1 = false;
    }
    if (circle2 == true) {
        cx2 = mouseX;
        cy2 = mouseY;
        circle2 = false;
        circlefinished = true;
    }
    if (mouseX > (smoothmX - 15) && mouseX < (smoothmX + 15) && mouseY > (smoothmY - 15) && mouseY < (smoothmY + 15)) {
        smoothness = (smoothness + 1);
        if (smoothness > 40) {
            smoothness = 40;
        }
    }
    if (mouseX > (smoothpX - 15) && mouseX < (smoothpX + 15) && mouseY > (smoothpY - 15) && mouseY < (smoothpY + 15) && (smoothness != 0)) {
        smoothness = (smoothness - 1);
        if (smoothness < 1) {
            smoothness = 1;
        }
    }
    if (mouseX > (quitX - 15) && mouseX < (quitX + 15) && mouseY > (quitY - 15) && mouseY < (quitY + 15)) {
        exit();
    }
}

function mouseReleased() {
    down = false;
}

function keyPressed() {
    save("exported.png");
}

function initializeFields() {
    x1 = mouseX;
    y1 = mouseY;
    x2 = 0;
    y2 = 0;
    speed = 0;
    cw = 0;
    cx1 = 0;
    cy1 = 0;
    cx2 = 0;
    cy2 = 0;
    ccx = 0;
    ccy = 0;
    circle1 = false;
    circle2 = false;
    circle1a = false;
    circle2a = false;
    circlefinished = false;
    rainbow = false;
    down = false;
    smoothness = 1;
    B = color(0, 0, 255);
    R = color(255, 0, 0);
    G = color(0, 255, 0);
    C = color(0, 0, 0);
    Bl = color(0, 0, 0);
    W = color(255, 255, 255);
    Y = color(255, 221, 0);
    P = color(122, 66, 255);
    O = color(211, 70, 13);
    Cy = color(8, 195, 224);
    Pk = color(224, 7, 148);
    Dg = color(12, 91, 16);
    Br = color(89, 29, 6);
    T = color(99, 95, 89);
    Rb = null;
    greenX = 100;
    greenY = 570;
    redX = 20;
    redY = 570;
    blueX = 60;
    blueY = 570;
    clearX = 1170;
    clearY = 570;
    blackX = 160;
    blackY = 570;
    whiteX = 200;
    whiteY = 570;
    yellowX = 20;
    yellowY = 530;
    purpleX = 60;
    purpleY = 530;
    rainbowX = 100;
    rainbowY = 530;
    orangeX = 20;
    orangeY = 490;
    cyanX = 60;
    cyanY = 490;
    pinkX = 100;
    pinkY = 490;
    dgreenX = 20;
    dgreenY = 450;
    brownX = 60;
    brownY = 450;
    taupeX = 100;
    taupeY = 450;
    circleX = 160;
    circleY = 450;
    weight = 5;
    quitX = 1170;
    quitY = 30;
    weightpX = 280;
    weightpY = 530;
    weightmX = 280;
    weightmY = 570;
    smoothmX = 160;
    smoothmY = 530;
    smoothpX = 200;
    smoothpY = 530;
    textX = 135;
    textY = 500;
    sIndicX = 176;
    sIndicY = 515;
    parabX = 180;
    parabY = 510;
    thickX = 260;
    thickY = 485;
    prevX = 280;
    prevY = 470;
    F = null;
}

