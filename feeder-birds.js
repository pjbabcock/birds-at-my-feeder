function addObservation() {
  //get table
  let table = document.getElementById("observation-table");

  //create row
  let row = table.insertRow(0);

  //create cells
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);
  let c6 = row.insertCell(5);
  let c7 = row.insertCell(6);
  let c8 = row.insertCell(7);
  let c9 = row.insertCell(8);
  let c10 = row.insertCell(9);
  let c11 = row.insertCell(10);
  let c12 = row.insertCell(11);

  //fill cells
  c1.innertext = document.getElementById("species-name-input").value;

}