// Array para almacenar los datos de pacientes y doctores
let patients = [];
let doctors = [];

// Función para validar los campos del formulario utilizando expresiones regulares y el DOM
function validateForm(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de los campos del formulario de doctores
  const doctorName = document.getElementById('doctor-name').value;
  const doctorLastname = document.getElementById('doctor-lastname').value;
  const doctorCedula = document.getElementById('doctor-cedula').value;
  const doctorSpecialty = document.getElementById('doctor-specialty').value;
  const doctorConsultorio = document.getElementById('doctor-consultorio').value;
  const doctorEmail = document.getElementById('doctor-email').value;

  // Obtener los valores de los campos del formulario de pacientes
  const patientName = document.getElementById('patient-name').value;
  const patientLastname = document.getElementById('patient-lastname').value;
  const patientCedula = document.getElementById('patient-cedula').value;
  const patientAge = document.getElementById('patient-age').value;
  const patientPhone = document.getElementById('patient-phone').value;
  const patientSpecialty = document.getElementById('patient-specialty').value;

  // Crear objetos para almacenar la información de doctores y pacientes
  const doctorData = {
    name: doctorName,
    lastname: doctorLastname,
    cedula: doctorCedula,
    specialty: doctorSpecialty,
    consultorio: doctorConsultorio,
    email: doctorEmail
  };

  const patientData = {
    name: patientName,
    lastname: patientLastname,
    cedula: patientCedula,
    age: patientAge,
    phone: patientPhone,
    specialty: patientSpecialty
  };

  // Agregar los objetos de doctores y pacientes al array correspondiente
  doctors.push(doctorData);
  patients.push(patientData);

  // Convertir los arrays a JSON
  const doctorsJSON = JSON.stringify(doctors);
  const patientsJSON = JSON.stringify(patients);

  // Guardar los archivos JSON en el almacenamiento local del navegador
  localStorage.setItem('doctors', doctorsJSON);
  localStorage.setItem('patients', patientsJSON);

  // Mostrar la información de los pacientes y doctores en la página
  displayPatients();
  displayDoctors();

  // Limpiar los campos del formulario
  event.target.reset();
}

// Función para mostrar la información de los pacientes en la página
function displayPatients() {
  const patientList = document.getElementById('patient-list');

  // Obtener los datos de pacientes desde el almacenamiento local (si existen)
  const patientsJSON = localStorage.getItem('patients');
  if (patientsJSON) {
    patients = JSON.parse(patientsJSON);
  }

  // Limpiar el contenido previo de la lista de pacientes
  patientList.innerHTML = '';

  // Recorrer los pacientes y crear elementos de lista para mostrar la información
  patients.forEach(function(patient) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${patient.name}, Cédula: ${patient.cedula}, Especialidad: ${patient.specialty}`;
    patientList.appendChild(listItem);
  });
}

// Función para mostrar la información de los doctores en la página
function displayDoctors() {
  const doctorList = document.getElementById('doctor-list');

  // Obtener los datos de doctores desde el almacenamiento local (si existen)
  const doctorsJSON = localStorage.getItem('doctors');
  if (doctorsJSON) {
    doctors = JSON.parse(doctorsJSON);
  }

  // Limpiar el contenido previo de la lista de doctores
  doctorList.innerHTML = '';

  // Recorrer los doctores y crear elementos de lista para mostrar la información
  doctors.forEach(function(doctor) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${doctor.name}, Cédula: ${doctor.cedula}, Especialidad: ${doctor.specialty}`;
    doctorList.appendChild(listItem);
  });
}

// Agregar el evento submit al formulario de doctores
const doctorForm = document.getElementById('doctor-form');
doctorForm.addEventListener('submit', validateForm);

// Agregar el evento submit al formulario de pacientes
const patientForm = document.getElementById('patient-form');
patientForm.addEventListener('submit', validateForm);

// Mostrar la información de pacientes y doctores al cargar la página
window.addEventListener('load', function() {
  displayPatients();
  displayDoctors();
});
