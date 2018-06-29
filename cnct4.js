let columns = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

function addDisk(col) {
    columns[col].push('red');
    let newDisk = document.createElement("div");
    newDisk.className = "disk";
    let columnDiv = document.getElementById("column" + col);
    columnDiv.appendChild(newDisk);
}