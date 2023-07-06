// Array para almacenar los datos de pacientes y doctores
let patients = [];
let doctors = [];

// Función para validar los campos del formulario utilizando expresiones regulares y el DOM
function validateForm(event) {
  event.preventDefault(); 

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


  doctors.push(doctorData);
  patients.push(patientData);

  // Convertir los arrays a JSON
  const doctorsJSON = JSON.stringify(doctors);
  const patientsJSON = JSON.stringify(patients);
  localStorage.setItem('doctors', doctorsJSON);
  localStorage.setItem('patients', patientsJSON);

  // Mostrar la información de los pacientes y doctores en la página
  displayPatients();
  displayDoctors();

  // Limpiar los campos del formulario
  event.target.reset();
}


function displayPatients() {
  const patientList = document.getElementById('patient-list');


  const patientsJSON = localStorage.getItem('patients');
  if (patientsJSON) {
    patients = JSON.parse(patientsJSON);
  }

  patientList.innerHTML = '';

  patients.forEach(function(patient) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${patient.name}, Cédula: ${patient.cedula}, Especialidad: ${patient.specialty}`;
    patientList.appendChild(listItem);
  });
}

// Función para mostrar la información de los doctores en la página
function displayDoctors() {
  const doctorList = document.getElementById('doctor-list');

  const doctorsJSON = localStorage.getItem('doctors');
  if (doctorsJSON) {
    doctors = JSON.parse(doctorsJSON);
  }

  doctorList.innerHTML = '';

  doctors.forEach(function(doctor) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${doctor.name}, Cédula: ${doctor.cedula}, Especialidad: ${doctor.specialty}`;
    doctorList.appendChild(listItem);
  });
}

const doctorForm = document.getElementById('doctor-form');
doctorForm.addEventListener('submit', validateForm);

const patientForm = document.getElementById('patient-form');
patientForm.addEventListener('submit', validateForm);

// Mostrar la información de pacientes y doctores al cargar la página
window.addEventListener('load', function() {
  displayPatients();
  displayDoctors();
});
