import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDLz3nOkqGV55ydTtUlT7LA-Ec47kA5jac",
    authDomain: "my-direction-732dd.firebaseapp.com",
    databaseURL: "https://my-direction-732dd-default-rtdb.firebaseio.com",
    projectId: "my-direction-732dd",
    storageBucket: "my-direction-732dd.appspot.com",
    messagingSenderId: "963532358561",
    appId: "1:963532358561:web:c54458ce2bf7bf7ff8c1e0",
    measurementId: "G-FZPM7H5Y1V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;