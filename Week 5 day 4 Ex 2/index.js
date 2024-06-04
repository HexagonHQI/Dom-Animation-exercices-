let intervalId;
let currentPosition = 0;

function myMove() {
  intervalId = setInterval(function() {
    const animateDiv = document.getElementById("animate");
    currentPosition += 1;
    animateDiv.style.left = currentPosition + "px";

    if (currentPosition >= 350) { // 350 = container width - animate width
      clearInterval(intervalId);
    }
  }, 1); // move 1px every 1ms
}