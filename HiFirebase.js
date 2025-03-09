// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAyVZ0F7jECoQlt_zBHFmeQXp4kQJ3FKc",
  authDomain: "iote2025-4fdb1.firebaseapp.com",
  databaseURL: "https://iote2025-4fdb1-default-rtdb.firebaseio.com",
  projectId: "iote2025-4fdb1",
  storageBucket: "iote2025-4fdb1.firebasestorage.app",
  messagingSenderId: "539449690625",
  appId: "1:539449690625:web:2b5ff25f6d8f4b711e0e00"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
var dbRef = firebase.database();

// Variables
var temperatura = 0;
var presion = 0;
var humedad = 0;

let dbTemp = dbRef.ref("Monitor/Temperatura");
let dbPres = dbRef.ref("Monitor/Presion");
let dbHum = dbRef.ref("Monitor/Humedad");

// Obtener temperatura
dbTemp.on('value', function(snapshot) {
  if (snapshot.exists()) {
    temperatura = snapshot.val();
    console.log("La temperatura es:", temperatura);
    document.getElementById("TemperaturaId").innerHTML = temperatura.toFixed(2) + " °C";
  } else {
    console.log("No se encontró el dato de temperatura en Firebase.");
  }
});

// Obtener presión
dbPres.on('value', function(snapshot) {
  if (snapshot.exists()) {
    presion = snapshot.val();
    console.log("La presión es:", presion);
    document.getElementById("PresionId").innerHTML = presion.toFixed(0) + " mmHG";
  } else {
    console.log("No se encontró el dato de presión en Firebase.");
  }
});

// Obtener humedad
dbHum.on('value', function(snapshot) {
  if (snapshot.exists()) {
    humedad = snapshot.val();
    console.log("La humedad es:", humedad);
    document.getElementById("HumedadId").innerHTML = humedad.toFixed(0) + " %";
  } else {
    console.log("No se encontró el dato de humedad en Firebase.");
  }
});
