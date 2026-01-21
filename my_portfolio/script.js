const body = document.body;

for (let i = 0; i < 80; i++) {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 5 + Math.random() * 10 + "s";
  snow.style.opacity = Math.random();
  body.appendChild(snow);
}
