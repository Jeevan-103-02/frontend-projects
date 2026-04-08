function generate() {
  let name = document.getElementById("studentName").value;
  let rollnum = document.getElementById("rollNumber").value;
  let department = document.getElementById("department").value;
  let reason = document.getElementById("reason").value;
  let date = document.getElementById("date").value;

  if(name=="" || rollnum=="" || department=="" || reason=="" || date=="") {
    alert("Please fill all fields");
    return;
  }

  let table = document.getElementById("gatePassTable").getElementsByTagName("tbody")[0];
  let row = table.insertRow();

  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = rollnum;
  row.insertCell(2).innerHTML = department;
  row.insertCell(3).innerHTML = reason;
  row.insertCell(4).innerHTML = date;

  // Fixed Generated On column (today's date only)
  let generatedOn = new Date().toLocaleDateString();
  row.insertCell(5).innerHTML = generatedOn;

  // Delete button
  let btn = document.createElement("button");
  btn.innerHTML = "Delete";
  btn.onclick = function() {
    row.remove();
  }
  row.insertCell(6).appendChild(btn);

  // Clear input fields
  document.getElementById("studentName").value = "";
  document.getElementById("rollNumber").value = "";
  document.getElementById("department").value = "";
  document.getElementById("reason").value = "";
  document.getElementById("date").value = "";
}

function searchStudent() {
  let roll = document.getElementById("searchRoll").value;
  let table = document.getElementById("gatePassTable");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) { // skip header
    let cell = rows[i].getElementsByTagName("td")[1]; // roll number column
    if (cell) {
      if (cell.innerHTML === roll) {
        rows[i].classList.add("highlight"); // add highlight
      } else {
        rows[i].classList.remove("highlight"); // remove highlight
      }
    }
  }
}
