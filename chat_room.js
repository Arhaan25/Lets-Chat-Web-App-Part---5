var firebaseConfig = {
     apiKey: "AIzaSyCOLAg9x8o8BoCDJauHHHnvvv4dQnxWvfM",
     authDomain: "lets-chat-web-app-remake.firebaseapp.com",
     databaseURL: "https://lets-chat-web-app-remake-default-rtdb.firebaseio.com",
     projectId: "lets-chat-web-app-remake",
     storageBucket: "lets-chat-web-app-remake.appspot.com",
     messagingSenderId: "1026554928611",
     appId: "1:1026554928611:web:b5b447f1b34ad791a494d6"
   };
   
   firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
     localStorage.setItem("room_name", room_name);
     window.location = "chat_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
             document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id=" + Room_names + "onclick= 'redirectToRoomName(this.id)' >#" + Room_names;
                  document.getElementById("output").innerHTML += row;
             });
    });
}
getData();

function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "chat_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html"
}