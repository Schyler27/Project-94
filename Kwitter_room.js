var firebaseConfig = {
    apiKey: "AIzaSyBLGHmqOQ9bJzPqO08Lf1mBjDFes30uYh8",
    authDomain: "lets-chat-web-app-6fadf.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-6fadf-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-6fadf",
    storageBucket: "lets-chat-web-app-6fadf.appspot.com",
    messagingSenderId: "423106441765",
    appId: "1:423106441765:web:b40d39d10df66cc2d805cc"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();
