const gridSizeBtn = document.createElement("button");
gridSizeBtn.textContent = "New Grid Size? Click Me!";
gridSizeBtn.classList.add("grid_btn");

const container = document.getElementById("container");
document.body.insertBefore(gridSizeBtn, container);

let userSize = 16; // Default grid size

gridSizeBtn.addEventListener("click", () => {
    const newSize = prompt("Please select the size of your grid (< 100):", userSize);
    if (!newSize || newSize > 100) {
        alert("Invalid size! Please choose a number less than 100.");
        return;
    }
    userSize = newSize;
    setupGrid();
});

function setupGrid() {
    // Clear the container before adding new squares
    container.innerHTML = "";

    // Set the dimensions for each square
    const squareSize = 100 / userSize; // Size in percentage

    // Create the grid
    for (let i = 0; i < userSize * userSize; i++) {
        const div = document.createElement("div");
        div.classList.add("squares");
        div.style.width = `${squareSize}%`;
        div.style.height = `${squareSize}%`;
        container.appendChild(div);
    }

    // Add hover effect
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            let rgb = randomiseColor();
            square.style.backgroundColor = randomiseColor();
        });
    });
}

// Initialize the default grid
setupGrid();

// Function to randomize color
function randomiseColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`; // Properly format as CSS RGB string
}