const grid = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("row");
  row.classList.add("row");

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseenter", (e) =>
      e.target.classList.add("marked")
    );
    row.appendChild(cell);
  }
  grid.appendChild(row);
}
