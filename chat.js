// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCOLAg9x8o8BoCDJauHHHnvvv4dQnxWvfM",
    authDomain: "lets-chat-web-app-remake.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-remake-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-remake",
    storageBucket: "lets-chat-web-app-remake.appspot.com",
    messagingSenderId: "1026554928611",
    appId: "1:1026554928611:web:b5b447f1b34ad791a494d6"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html"
    };
    /*
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    */
    




