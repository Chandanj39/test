// array of date objects that go back every other day for the past 101 days
const dates = [];

for (let i = 0; i < 101; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i * 2);
  dates.push(date);
}

// create an array called 'randomValues' with a random number between 0 and 50 for each date
const randomValues = dates.map((date, index) => {
  return {
    date,
    val: Math.floor(Math.random() * 51) // generates a random number between 0 and 50
  };
});

// function to create a dot element
function createDot(val, index) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.borderRadius = "50%";
  dot.style.backgroundColor = "blue"; // you can change the color here
  dot.style.position = "absolute";
  const x = index * 13 + 3; // set the x position based on the item's position in the array
  dot.style.left = `${x}px`;
  const y = val * 5 + 100; // set the y position based on the 'val' property
  dot.style.top = `${y}px`;
  return dot;
}

// function to add the dots to the HTML
function addDots() {
  const container = document.querySelector(".container");
  randomValues.forEach((value, index) => {
    const dot = createDot(value.val, index);
    container.appendChild(dot);
  });
}

addDots();
