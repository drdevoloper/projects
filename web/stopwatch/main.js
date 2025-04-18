let startTime, elapsedTime = 0, timerInterval;
const timeDisplay = document.querySelector('.time-display');
const laps = document.querySelector('.laps');

document.getElementById('start').addEventListener('click', () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (timerInterval) {
    const lapTime = timeDisplay.textContent;
    const li = document.createElement('li');
    li.textContent = lapTime;
    laps.appendChild(li);
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
