function addObservation() {
  //get table
  let table = document.getElementById("observation-table");

  //get species input value
  let speciesNameInput = document.getElementById("species-name-input").value;

  //check for repeat species
  let previousSpecies = table.getElementsByClassName("species-name")
  let i = 0
  let speciesCheck = false
  while (i < previousSpecies.length) {
    if (previousSpecies[i].innerHTML === speciesNameInput) {
      speciesCheck = true;
    }
    i++;
  }

  //if new species:
  if (speciesCheck === false) {
  
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

    //fill species name
    c0.innerHTML = speciesNameInput;
    c0.classList.add("species-name");
  
    //fill months
    let newCells = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
  
    for (let j = 0; j < 12; i++) {
      if (document.getElementById(`month${j+1}`).checked) {
        newCells[j].classList.add("present");
      }
    }

  }
}