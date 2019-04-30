
var patients = [];

document.getElementById("btnSave").addEventListener("click", save);

function save() {
  const formData = getFormData();
  // ...
}

function getFormData() {
  var formData = {};
  // ...
  return formData;
}

function validateFormData(formData) {
  // ...
}

function renderPatients() {
  var render = "";
  // ...
  document.getElementById("tblPatients").innerHTML = render;
}
