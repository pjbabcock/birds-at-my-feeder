//global variables
let newestTableNumber = 0

//add new bird to feeder table
function addObservation(tableId) {
  //get table
  let table = document.getElementById(tableId);

  //get species input value
  let speciesNameInput = document.getElementById(`species-name-input_${tableId}`).value;

  //check for repeat species
  let previousSpecies = table.getElementsByClassName("species-name");
  let rowsChecked = 0
  let speciesCheck = false
  for (let i = 0; i < previousSpecies.length; i++) {
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
      if (document.getElementById(`month${i+1}_${tableId}`).classList.contains("present")) {
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
  else if (speciesNameInput) {

    //fill new months
    for (let i = 0; i < 12; i++) {
      if (document.getElementById(`month${i+1}_${tableId}`).classList.contains("present")) {
        table.rows[rowsChecked].cells[i+1].classList.add("present");
      }
    }
  }

  //clear inputs
  if (speciesNameInput) {
    document.getElementById(`species-name-input_${tableId}`).value = null;
    document.getElementById(`all-year_${tableId}`).checked = false;
    for (i = 0; i < 12; i++) {
      document.getElementById(`month${i+1}_${tableId}`).classList.remove("present");
    }
  }
}

//"All-year" checkbox behavior:
function checkAll(tableId) {
  //check all boxes
  if (document.getElementById(`all-year_${tableId}`).checked) {
    for (let i = 0; i < 12; i++) {
      document.getElementById(`month${i+1}_${tableId}`).classList.add("present");
    }
  }

  //uncheck all boxes
  else {
    for (let i = 0; i < 12; i++) {
      document.getElementById(`month${i+1}_${tableId}`).classList.remove("present");
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
function addFeeder() {
  newestTableNumber++

  //Create feeder container and append to DOM
  let newDiv = document.createElement("div");
  newDiv.id = `feeder-container_feederTable${newestTableNumber}`;
  newDiv.classList.add("feeder-container");
  document.getElementById("feeder-data-container").appendChild(newDiv);

  //create feeder title and append to DOM
  let feederTitle = document.createElement("h2")
  feederTitle.innerHTML = `Feeder ${newestTableNumber+1}`
  newDiv.appendChild(feederTitle)

  //Create feeder table
  let newTable = document.createElement("table");
  newTable.id = `feederTable${newestTableNumber}`;
  newTable.classList.add("feeder-table");

  //format columns of feeder table
  let newColGroup = document.createElement("colgroup");
  let newSpeciesCol = document.createElement("col");
  newSpeciesCol.span = 1;
  newSpeciesCol.classList.add("species-name-column");
  let newMonthsCols = document.createElement("col");
  newMonthsCols.span = 12;
  newMonthsCols.classList.add("months-column");
  newColGroup.appendChild(newSpeciesCol);
  newColGroup.appendChild(newMonthsCols);
  newTable.appendChild(newColGroup);

  //Add row for headers
  let titleRow = newTable.insertRow(0);

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
  c0.outerHTML = "<th>Species Name</th>";
  c1.outerHTML = "<th>Jan</th>";
  c2.outerHTML = "<th>Feb</th>";
  c3.outerHTML = "<th>Mar</th>";
  c4.outerHTML = "<th>Apr</th>";
  c5.outerHTML = "<th>May</th>";
  c6.outerHTML = "<th>Jun</th>";
  c7.outerHTML = "<th>Jul</th>";
  c8.outerHTML = "<th>Aug</th>";
  c9.outerHTML = "<th>Sep</th>";
  c10.outerHTML = "<th>Oct</th>";
  c11.outerHTML = "<th>Nov</th>";
  c12.outerHTML = "<th>Dec</th>";

  //append feeder table to DOM
  newDiv.appendChild(newTable);

  //create submission table
  let newSubTable = document.createElement("table");
  newSubTable.id = `new-observation-submission-${newestTableNumber}`;
  newSubTable.classList.add("new-observation-submission");

  //format columns of submission table
  let newSubColGroup = document.createElement("colgroup");
  let newSubSpeciesCol = document.createElement("col");
  newSubSpeciesCol.span = 1;
  newSubSpeciesCol.classList.add("species-name-column");
  let newSubMonthsCols = document.createElement("col");
  newSubMonthsCols.span = 12;
  newSubMonthsCols.classList.add("months-column");
  newSubColGroup.appendChild(newSubSpeciesCol);
  newSubColGroup.appendChild(newSubMonthsCols);
  newSubTable.appendChild(newSubColGroup);

  //add row for submission table
  let subRow = newSubTable.insertRow(0);

  //add cells to submission table
  let s0 = subRow.insertCell(0);
  let s1 = subRow.insertCell(1);
  let s2 = subRow.insertCell(2);
  let s3 = subRow.insertCell(3);
  let s4 = subRow.insertCell(4);
  let s5 = subRow.insertCell(5);
  let s6 = subRow.insertCell(6);
  let s7 = subRow.insertCell(7);
  let s8 = subRow.insertCell(8);
  let s9 = subRow.insertCell(9);
  let s10 = subRow.insertCell(10);
  let s11 = subRow.insertCell(11);
  let s12 = subRow.insertCell(12);
  let s13 = subRow.insertCell(13);

  //create bird name input
  let nameField = document.createElement("input");
  nameField.type = "text";
  nameField.id = `species-name-input_${newTable.id}`;
  nameField.classList.add("autocomplete-input");
  nameField.placeholder = "Search for a bird";

  //create ul for autocomplete
  let nameFieldList = document.createElement("ul");
  nameFieldList.classList.add("autocomplete-result-list");

  //create div for autocomplete
  let nameFieldContainer = document.createElement("div");
  nameFieldContainer.id = "species-name-div";
  nameFieldContainer.classList.add("autocomplete");
  nameFieldContainer.appendChild(nameField);
  nameFieldContainer.appendChild(nameFieldList)

  //place div in submission table
  s0.appendChild(nameFieldContainer)

  //append submission table to DOM
  newDiv.appendChild(newSubTable);

  //format month cells
  let newSubCells = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]

  for (let i=0; i < 12; i++) {
    newSubCells[i].classList.add("month-cell");
    newSubCells[i].id = `month${i+1}_${newTable.id}`;
    newSubCells[i].setAttribute("onclick", `togglePresent(${newSubCells[i].id})`);
  }

  //create Add button
  let newAddButton = document.createElement("button");
  newAddButton.id = `add-button-${newestTableNumber}`;
  newAddButton.type = "button";
  newAddButton.innerHTML = "Add";
  newAddButton.setAttribute("onclick", `addObservation("${newTable.id}")`);

  //append Add button to submission table
  s13.appendChild(newAddButton);

  //create row for all year checkbox
  let allYearRow = newSubTable.insertRow(-1);

  //add cells to all year row
  y0 = allYearRow.insertCell(0);
  y1 = allYearRow.insertCell(1);

  //format cells
  y0.classList.add("blank-cell");
  y1.classList.add("all-year-cell");

  //create all year checkbox
  let newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.id = `all-year_${newTable.id}`;
  newCheckbox.classList.add("all-year");
  newCheckbox.setAttribute("onclick", `checkAll('${newTable.id}')`);

  //creat all year label
  let newCheckLabel = document.createElement("label");
  newCheckLabel.htmlFor = `all-year_${newTable.id}`;
  newCheckLabel.id = `all-year-label_${newTable.id}`;
  newCheckLabel.classList.add("all-year-label");
  newCheckLabel.innerHTML = "All year";

  //append checkbox and label to cell
  y1.appendChild(newCheckbox);
  y1.appendChild(newCheckLabel);

  //apply autocomplete to all inputs
  const elements = document.querySelectorAll(".autocomplete");
  const search = input => {
      if (input.length < 1) { return [] }
      return birdSpecies.filter(bird => {
        return bird.toLowerCase().includes(input.toLowerCase())
      })
    }
  elements.forEach(el => {
    new Autocomplete(el, {
      search,
      autoselect: true
    });
  })

  //create feeder-selector button
  let newSelector = document.createElement("button");
  newSelector.type = "button";
  newSelector.id = `selector_feederTable${newestTableNumber}`;
  newSelector.classList.add("feeder-selector");
  newSelector.innerHTML = `Feeder ${newestTableNumber+1}`;
  newSelector.setAttribute("onclick", `selectFeeder('${newTable.id}')`);
  document.getElementById("feeder-selectors-container").appendChild(newSelector);

  //show new table only
  let allTables = Array.from(document.getElementsByClassName("feeder-container"));
  allTables.forEach(function (table) {
    table.classList.add("hidden")
    console.log(`I hid ${table.id}`);
  });
  document.getElementById(`feeder-container_${newTable.id}`).classList.remove("hidden");
  console.log(`I showed feeder-container_${newTable.id}`);

}

//Show feeder details:
function showDetails(tableID) {
  document.getElementById(`metadata-form-container_${tableID}`).classList.remove("hidden");
  document.getElementById(`details-button_${tableID}`).classList.add("hidden");
  document.getElementById(`hide-details-button_${tableID}`).classList.remove("hidden")
}

//Hide feeder details:
function hideDetails(tableID) {
  document.getElementById(`metadata-form-container_${tableID}`).classList.add("hidden");
  document.getElementById(`details-button_${tableID}`).classList.remove("hidden");
  document.getElementById(`hide-details-button_${tableID}`).classList.add("hidden");
}

//Select feeder table:
function selectFeeder(tableID) {
  //Hide all tables
  let allTables = Array.from(document.getElementsByClassName("feeder-container"));
  allTables.forEach(function (table) {
    table.classList.add("hidden")
    console.log(`I hid ${table.id}`);
  });
  //Show selected table
  document.getElementById(`feeder-container_${tableID}`).classList.remove("hidden");
  console.log(`I showed feeder-container_${tableID}`);
}

//Autocomplete array
let birdSpecies = ["House Finch", "House Wren", "Dark-eyed Junco", "Downy Woodpecker", "Black-capped Chickadee", "Yellow-bellied Sapsucker", "Yellow-throated Nightingale-Thrush"]
