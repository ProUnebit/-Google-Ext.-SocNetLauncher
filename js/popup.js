const s_Hand = document.querySelector('.s-hand');
const m_Hand = document.querySelector('.m-hand');
const h_Hand = document.querySelector('.h-hand');

function viewDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  s_Hand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  m_Hand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  h_Hand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(viewDate, 1000);
