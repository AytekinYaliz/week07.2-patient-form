
var patients = [];
var nextId = 1;
var lastSortBy = "";
var azOrder = true;


function save() {
  const formData = getFormData(nextId);

  if (validateFormData(formData)) {
    patients.push(formData);
    nextId++;
    renderPatients();
  } else {
    alert("There are some missing fields!");
  }
  
  return false;
}

function getFormData(id) {
  var formData = {};

  formData.id = id;
  formData.firstName = document.getElementById("firstName").value;
  formData.lastName = document.getElementById("lastName").value;
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
    formData.firstName &&
    formData.lastName &&
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
      "<td>" + patients[i].id + "</td>" +
      "<td>" +
      patients[i].firstName +
      "</td>" +
      "<td>" +
      patients[i].lastName +
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
      "<td>" +
      `<input class='btn btn-danger' value='Delete' name='${patients[i].id}' style="cursor:pointer" onclick="deletePatient(this)"></input>` +
      "</td>" +
      "</tr>";
  }
  document.getElementById("tblPatients").innerHTML = render;
}

function deletePatient(element) {

  patients = patients.filter(item => element.name != item.id);

  renderPatients();
}

function sortPatients(sortBy) {
  if(sortBy === lastSortBy) {
    azOrder = !azOrder;
  }

  patients.sort((a, b) => {
    return a[sortBy] === b[sortBy] 
      ? 0 
      : a[sortBy] < b[sortBy]
        ? azOrder 
          ? -1 
          : 1
        : azOrder 
          ? 1 
          : -1;
  });

  renderPatients();

  lastSortBy = sortBy;
}