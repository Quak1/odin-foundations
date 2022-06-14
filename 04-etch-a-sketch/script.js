const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

const slider = document.querySelector("#grid-selector");
slider.oninput = () => changeGrid(slider.value);

function changeGrid(size) {
  if (size > 100) size = 100;

  const oldGrid = document.querySelector("#grid");
  oldGrid.remove();

  const grid = document.createElement("div");
  grid.setAttribute("id", "grid");

  for (let i = 0; i < size; i++) {
    const row = document.createElement("row");
    row.classList.add("row");

    for (let i = 0; i < size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseenter", (e) =>
        e.target.classList.add("marked")
      );
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

  container.appendChild(grid);
}

function resetGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("marked");
  });
}

changeGrid(16);
