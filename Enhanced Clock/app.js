const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".minute");
const secHand = document.querySelector(".second");
const digitalClock = document.querySelector(".digital-clock");
const dateDisplay = document.querySelector(".date");
const clock = document.querySelector(".clock");

function addClockNumbers() {
  for (let i = 1; i <= 12; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.style.setProperty("--rotation", `${i * 30}deg`);
    number.innerHTML = `<span>${i}</span>`;
    clock.appendChild(number);
  }
}

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  secHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;

  digitalClock.textContent = now.toLocaleTimeString();
  dateDisplay.textContent = now.toDateString();
}

addClockNumbers();
updateClock();
setInterval(updateClock, 1000);
