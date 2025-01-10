const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['#ffffff', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
let scrollSpeedFactor = 1;

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.05 + 0.02;
    }

    update() {
        this.z -= this.speed * canvas.width * 0.005 * scrollSpeedFactor;
        if (this.z <= 0) {
            this.reset();
            this.z = canvas.width;
        }
    }

    draw() {
        const scale = canvas.width / this.z;
        const x2D = canvas.width / 2 + this.x * scale;
        const y2D = canvas.height / 2 + this.y * scale;

        ctx.beginPath();
        ctx.arc(x2D, y2D, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function createParticles() {
    const count = 500;
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

createParticles();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0;
    createParticles();
});

window.addEventListener('scroll', () => {
    scrollSpeedFactor = 1 + window.scrollY / 200;
});