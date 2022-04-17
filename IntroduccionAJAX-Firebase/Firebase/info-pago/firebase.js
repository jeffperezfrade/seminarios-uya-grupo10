// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV7ZE9iSAxm5WeRsTiBAr-XHZ9RzoGSRQ",
  authDomain: "uya-firebase.firebaseapp.com",
  projectId: "uya-firebase",
  storageBucket: "uya-firebase.appspot.com",
  messagingSenderId: "71270437686",
  appId: "1:71270437686:web:fd5106922fe23b99671997",
  measurementId: "G-T74VF3F710",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const SaveUser = (user) => {
  let ref;
 db.collection("usuarios").add({
   user
 })
 .then(function(docRef) {
   console.log("Document written with ID: ", docRef.id);
   messageOK();
 })
 .catch(function(error) {
   console.log("Error adding document: ", error);
   messageERROR();
 })
}

const messageOK = () => {
  Swal.fire(
    'Buen trabajo!',
    'Datos guardados correctamente en Firebase!',
    'success'
  )
}

const messageERROR = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Los datos no fueron guardados correctamente!'
  })
}

$("#btn-save").on("click", () => {
  let dni = $("#dni").val();
  let nacimiento = $("#nacimiento").val();
  let numCuenta = $("#num-cuenta").val();
  let descuento = $("#descuento").val();
  let metPago = $("#met-pago").val();
  const user = {
    dni,
    nacimiento,
    numCuenta,
    descuento,
    metPago
  }
  SaveUser(user);
})

