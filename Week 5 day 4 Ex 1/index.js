// Part 1 

setTimeout(function() {
    alert("Hello World");
  }, 2000);

// Part 2 

setTimeout(function() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
  }, 2000);

  //Part 3 

  let intervalId;
let paragraphCount = 0;

intervalId = setInterval(function() {
  const container = document.getElementById("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World";
  container.appendChild(paragraph);
  paragraphCount++;

  if (paragraphCount >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

document.getElementById("clear").addEventListener("click", function() {
  clearInterval(intervalId);
});