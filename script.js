const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");

/* NO button jumping */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button */
yesBtn.addEventListener("click", () => {
  document.querySelector(".card").style.display = "none";
  celebrate.classList.remove("hidden");
  startConfetti();
});

/* Confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();
      c.y += c.d;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();
}
