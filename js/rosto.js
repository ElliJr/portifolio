let olhoX, olhoY;
let centroX, centroY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    centroX = width / 2;
    centroY = height / 2;
}

function draw() {
    background("black");

    // Define o centro da tela
    centroX = width / 2;
    centroY = height / 2;

    // Rosto
    fill("#782419");
    circle(centroX, centroY, 300);

    // Olhos
    fill("white");
    circle(centroX - 50, centroY - 50, 60); // Olho esquerdo
    circle(centroX + 50, centroY - 50, 60); // Olho direito

    // Boca
    stroke("black");
    strokeWeight(4);
    line(centroX - 50, centroY + 70, centroX + 50, centroY + 70);

    // Nariz
    noStroke();
    fill("#9a4c3e");
    triangle(centroX, centroY - 20, centroX - 30, centroY + 20, centroX + 30, centroY + 20);

    // Sobrancelhas
    stroke("black");
    strokeWeight(3);
    line(centroX - 77, centroY - 85, centroX - 22, centroY - 87); // Esquerda
    line(centroX + 25, centroY - 84, centroX + 79, centroY - 94); // Direita

    // Pupilas seguindo o mouse
    olhoX = map(mouseX, 0, width, centroX - 70, centroX - 30);
    olhoY = map(mouseY, 0, height, centroY - 70, centroY - 30);

    fill("black");
    circle(olhoX, olhoY, 10); // Pupila esquerda
    circle(olhoX + 100, olhoY, 10); // Pupila direita

    // Depuração: Coordenadas do mouse
    if (mouseIsPressed) {
        console.log(mouseX, mouseY);
    }
}

// Redimensiona o canvas mantendo o rosto no centro
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
