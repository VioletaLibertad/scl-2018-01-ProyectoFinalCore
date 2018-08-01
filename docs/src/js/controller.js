// Llamar a database 
const database = firebase.database();
// llamar a firebase usuarios autenticados
const autentication = firebase.auth();
// Llamar a Firebase Messaging object.
const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BIvOtXyPXyEhUFgKw9JaE0E7noalpNJvyvmI2krSmf6JFbDzwN3hBOBrfqb2RRzKpCIvYGgrKhlq2-qsYyx2b6c");

window.currentVisitorRegistration = () => {
  /* crear id para cada visitante */
  const newVisitorId = database.ref().child('visitor').push().key;
  const startedAt = firebase.database.ServerValue.TIMESTAMP;
  let time = new Date().getTime();
  let date = new Date(time).toLocaleString();
  // añadiendo una nueva coleccion
  database.ref(`visitors/${newVisitorId}`).set({
      id: newVisitorId,
      rut: rut,
      email: email,
      licensePlate: licensePlate,
      host: host,
      goingTo: goingTo,
      visitPurpose: visitPurpose,
      arrivingTime: date
  });
};

function validatePersonIdentity(){
  const rut = '17834887-6';
	fetch(`https://api.rutify.cl/search?q=${rut}`)
	.then(response => response.json())
	.then(data => { 
    console.log(data[0].name); // nombre completo de la visita sacado de la API   
	})
	.catch((e) => {
	 console.log(e);
	});
}

// ==========Funciones avisar a la empresa========

function singIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
  })
    .catch(function (error) {
      console.log('entrar' + error);
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
    });
}

function userOn(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados 
      const btnAceptNotifications = document.getElementById('aceptNotifications');
      btnAceptNotifications.onclick = aceptNotifications();
      } else {
      // si no esta logeado no pasa nada 
      }
    });
}

function aceptNotifications(){
  messaging.requestPermission()
  .then(function() {
    messaging.getToken(function(currentToken) {
      if (currentToken) {
        console.log(currentToken);
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    }).catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
      showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);
    });
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
}