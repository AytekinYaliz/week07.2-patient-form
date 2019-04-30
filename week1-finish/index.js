
var patients = [];

document.getElementById("btnSave").addEventListener("click", save);

function save() {
  const formData = getFormData();

  if (validateFormData(formData)) {
    patients.push(formData);
    console.log(patients);
    renderPatients();
  } else {
    alert("There are some missing fields!");
  }
}

function getFormData() {
  var formData = {};

  formData.name = document.getElementById("firstName").value;
  formData.surname = document.getElementById("lastName").value;
  formData.age = document.getElementById("age").value;

  if (document.getElementById("genderType-female").checked === true) {
    formData.gender = document.getElementById("genderType-female").value;
  } else if (document.getElementById("genderType-male").checked === true) {
    formData.gender = document.getElementById("genderType-male").value;
  }

  formData.city = document.getElementById("city").value;

  formData.addictions = [];
  if (document.getElementById("addictions-none").checked === true) {
    formData.addictions.push(document.getElementById("addictions-none").value);
  }
  if (document.getElementById("addictions-smoke").checked === true) {
    formData.addictions.push(document.getElementById("addictions-smoke").value);
  }
  if (document.getElementById("addictions-alcohol").checked === true) {
    formData.addictions.push(document.getElementById("addictions-alcohol").value);
  }
  if (document.getElementById("addictions-drug").checked === true) {
    formData.addictions.push(document.getElementById("addictions-drug").value);
  }

  return formData;
}

function validateFormData(formData) {
  if (
    formData.name &&
    formData.surname &&
    formData.age &&
    formData.gender &&
    formData.city &&
    formData.addictions.length > 0
  ) {
    return true;
  }

  return false;
}

function renderPatients() {
  var render = "";
  for (var i = 0; i < patients.length; i++) {
    render +=
      `<tr id='${i}'>` +
      "<td>" +
      patients[i].name +
      "</td>" +
      "<td>" +
      patients[i].surname +
      "</td>" +
      "<td>" +
      patients[i].age +
      "</td>" +
      "<td>" +
      patients[i].gender +
      "</td>" +
      "<td>" +
      patients[i].city +
      "</td>" +
      "<td>" +
      patients[i].addictions.join(", ") +
      "</td>" +
      "</tr>";
  }
  document.getElementById("tblPatients").innerHTML = render;
}
