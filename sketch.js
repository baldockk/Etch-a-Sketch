const container = document.getElementById("container");

// Creates a 16 x 16 grid of divs inside the container
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.classList.add("grid_col");
        container.appendChild(col); // Append each cell directly to the container
    }
}
