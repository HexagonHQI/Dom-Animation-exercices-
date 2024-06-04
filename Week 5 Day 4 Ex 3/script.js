const box = document.getElementById("box");
const target = document.getElementById("target");

let offsetX = 0;
let offsetY = 0;

box.addEventListener("mousedown", (event) => {
  offsetX = event.clientX - box.getBoundingClientRect().left;
  offsetY = event.clientY - box.getBoundingClientRect().top;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(event) {
  box.style.left = event.clientX - offsetX + "px";
  box.style.top = event.clientY - offsetY + "px";
}

function onMouseUp() {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);

  if (target.getBoundingClientRect().x <= box.getBoundingClientRect().x &&
      target.getBoundingClientRect().x + target.offsetWidth >= box.getBoundingClientRect().x + box.offsetWidth &&
      target.getBoundingClientRect().y <= box.getBoundingClientRect().y &&
      target.getBoundingClientRect().y + target.offsetHeight >= box.getBoundingClientRect().y + box.offsetHeight) {
    box.style.backgroundColor = "green";
  } else {
    box.style.backgroundColor = "red";
  }
}