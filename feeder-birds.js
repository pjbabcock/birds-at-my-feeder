function addObservation() {
  //get table
  let table = document.getElementById("feeder-table-0");

  //get species input value
  let speciesNameInput = document.getElementById("species-name-input").value;

  //check for repeat species
  let previousSpecies = table.getElementsByClassName("species-name");
  let rowsChecked = 0
  let speciesCheck = false
  for ( i = 0; i < previousSpecies.length; i++) {
    rowsChecked++;
    if (previousSpecies[i].innerHTML === speciesNameInput) {
      speciesCheck = true;
      break;
    }
  }

  //if new species:
  if (speciesCheck === false && speciesNameInput) {
  
    //create row
    let row = table.insertRow(-1);

    //create cells
    let c0 = row.insertCell(0);
    let c1 = row.insertCell(1);
    let c2 = row.insertCell(2);
    let c3 = row.insertCell(3);
    let c4 = row.insertCell(4);
    let c5 = row.insertCell(5);
    let c6 = row.insertCell(6);
    let c7 = row.insertCell(7);
    let c8 = row.insertCell(8);
    let c9 = row.insertCell(9);
    let c10 = row.insertCell(10);
    let c11 = row.insertCell(11);
    let c12 = row.insertCell(12);
    let c13 = row.insertCell(13);

    //fill species name
    c0.innerHTML = speciesNameInput;
    c0.classList.add("species-name");

    //create delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      this.parentElement.parentElement.remove();
    }
    c13.appendChild(deleteButton);
    c13.classList.add("delete-button-cell");
  
    //style new month cells
    let newCells = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
  
    for (let i = 0; i < 12; i++) {
      newCells[i].classList.add("month-cell")
      if (document.getElementById(`month${i+1}`).classList.contains("present")) {
        newCells[i].classList.add("present");
      }
    }
    
    //add on-click behavior to cells
    for (let i = 0; i <12; i++) {
      newCells[i].onclick = function() {
        if (this.classList.contains("present")) {
          this.classList.remove("present");
        }
        else {
          this.classList.add("present");
        }
      }
    }
  }

  //if repeat species:
  else {

    //fill new months
    for (let i = 0; i < 12; i++) {
      if (document.getElementById(`month${i+1}`).classList.contains("present")) {
        table.rows[rowsChecked].cells[i+1].classList.add("present");
      }
    }
  }

  //clear inputs
  document.getElementById("species-name-input").value = null;
  document.getElementById("all-year").checked = false;
  for (i = 0; i < 12; i++) {
    document.getElementById(`month${i+1}`).classList.remove("present");
  }
}

//"All-year" checkbox behavior:
function checkAll() {
  //check all boxes
  if (document.getElementById("all-year").checked) {
    for (let i = 0; i < 12; i++) {
      document.getElementById(`month${i+1}`).classList.add("present");
    }
  }

  //uncheck all boxes
  else {
    for (let i = 0; i < 12; i++) {
      document.getElementById(`month${i+1}`).classList.remove("present");
    }
  }
}

//Toggle month cells in input row
function togglePresent(boxId) {
  if (boxId.classList.contains("present")) {
    boxId.classList.remove("present");
  }
  else {
    boxId.classList.add("present");
  }
}

//Add a new feeder:
let newestTableNumber = 0
function addFeeder() {
  newestTableNumber++
  //Create table
  let newTable = document.createElement("table");
  newTable.id = `feeder-table-${newestTableNumber}`
  newTable.classList.add("feeder-table")

  //format columns
  let newColGroup = document.createElement("colgroup")
  let newSpeciesCol = document.createElement("col")
  newSpeciesCol.span = 1
  newSpeciesCol.classList.add("species-name-column")
  let newMonthsCols = document.createElement("col")
  newMonthsCols.span = 12
  newMonthsCols.classList.add("months-column")
  newColGroup.appendChild(newSpeciesCol)
  newColGroup.appendChild(newMonthsCols)
  newTable.appendChild(newColGroup)

  //Add row for headers
  let titleRow = newTable.insertRow(0)

  //Add cells for headers
  let c0 = titleRow.insertCell(0);
  let c1 = titleRow.insertCell(1);
  let c2 = titleRow.insertCell(2);
  let c3 = titleRow.insertCell(3);
  let c4 = titleRow.insertCell(4);
  let c5 = titleRow.insertCell(5);
  let c6 = titleRow.insertCell(6);
  let c7 = titleRow.insertCell(7);
  let c8 = titleRow.insertCell(8);
  let c9 = titleRow.insertCell(9);
  let c10 = titleRow.insertCell(10);
  let c11 = titleRow.insertCell(11);
  let c12 = titleRow.insertCell(12);
  let c13 = titleRow.insertCell(13);

  //fill header cells
  c0.outerHTML = "<th>Species Name</th>"
  c1.outerHTML = "<th>Jan</th>"
  c2.outerHTML = "<th>Feb</th>"
  c3.outerHTML = "<th>Mar</th>"
  c4.outerHTML = "<th>Apr</th>"
  c5.outerHTML = "<th>May</th>"
  c6.outerHTML = "<th>Jun</th>"
  c7.outerHTML = "<th>Jul</th>"
  c8.outerHTML = "<th>Aug</th>"
  c9.outerHTML = "<th>Sep</th>"
  c10.outerHTML = "<th>Oct</th>"
  c11.outerHTML = "<th>Nov</th>"
  c12.outerHTML = "<th>Dec</th>"

  //append to DOM
  document.getElementById("feeder-data-container").appendChild(newTable)
}

//Autocomplete array
let birdSpecies = ["House Finch", "House Wren", "Dark-eyed Junco", "Downy Woodpecker", "Black-capped Chickadee", "Yellow-bellied Sapsucker", "Yellow-throated Nightingale-Thrush"]
