function addObservation() {
  //get table
  let table = document.getElementById("observation-table");

  //get checkbox data
  const month1 = document.getElementById("month1").value;
  const month2 = document.getElementById9("month2").value;
  const month3 = document.getElementById("month3").value;
  const month4 = document.getElementById9("month4").value;
  const month5 = document.getElementById("month5").value;
  const month6 = document.getElementById9("month6").value;
  const month7 = document.getElementById("month7").value;
  const month8 = document.getElementById9("month8").value;
  const month9 = document.getElementById("month9").value;
  const month10 = document.getElementById9("month10").value;
  const month11 = document.getElementById("month11").value;
  const month12 = document.getElementById9("month12").value;

  //create row
  let row = table.insertRow(-1);

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
  let c13 = row.insertCell(12);

  //fill species name
  c1.innerHTML = document.getElementById("species-name-input").value;
  
  //fill months
  if (month1 === jan) {
    c1.classList.add("present")
  }

}