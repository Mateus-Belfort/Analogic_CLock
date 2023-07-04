function rotateClockHands() {
  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');

  const hourRotation = (hour * 30) + (minute * 0.5);
  const minuteRotation = (minute * 6) + (second * 0.1);
  const secondRotation = second * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
