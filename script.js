//your JS code here. If required.
// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const line = document.getElementById('line');
  if (!line) return;

  let angle = 0; // global rotation angle in degrees

  // Update rotation every 20 milliseconds, adding 2 degrees each time
  setInterval(function () {
    angle = (angle + 2) % 360;
    // Keep the centering translate and apply the rotation
    line.style.transform = `rotate(${angle}deg)`;
  }, 20);
});
