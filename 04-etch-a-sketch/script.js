const container = document.querySelector(".container");

const slider = document.querySelector("#grid-selector");
slider.oninput = () => {
  console.log(slider.value);
  changeGrid(slider.value);
};

function changeGrid(size) {
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

changeGrid(16);
