// Typing Text Effect
const text = "Counting every second for Rasmalai's magical birthday ✨";
const typing = document.querySelector('.typing');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = typeWriter;

// Countdown Timer
const birthday = new Date("May 23, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// Surprise Message
function showMessage() {
  document.getElementById('message').classList.remove('hidden');
}

// Floating Hearts Animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function drawHeart(x, y, size) {
  ctx.fillStyle = '#ff4d88';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(h => {
    drawHeart(h.x, h.y, h.size);
    h.y -= h.speed;

    if (h.y < -20) {
      h.y = canvas.height + 20;
      h.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();
