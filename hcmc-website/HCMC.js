let registerButton = document.querySelector('button[type="submit"]');
function func(evt) {
  let elements = [];
  elements.push(document.getElementById("patientIdNumber").value);
  elements.push(document.getElementById("firstName").value);
  elements.push(document.getElementById("middleInitials").value);
  elements.push(document.getElementById("lastName").value);
  elements.push(document.getElementById("dateOfBirth").value);
  elements.push(document.getElementById("ddlDepartment").value);
  if (document.getElementById("radioIsOutPatientYes").checked) {
    elements.push("Yes");
  } else {
    elements.push("No");
  }
  let table = document.getElementById("tbodyPatientsList");
  let newRow = table.insertRow();
  for (let val of elements) {
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(val);
    newCell.appendChild(newText);
  }
}
function elderly(evt) {
  if (evt.checked) {
    let rows = document.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
      if (calculateAge(new Date(rows[i].childNodes[4].innerHTML)) < 65) {
        rows[i].style.display = "none";
      }
    }
  } else {
    let rows = document.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
      rows[i].style.display = "";
    }
  }
}
function calculateAge(dob) {
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  return Math.abs(year - 1970);
}
