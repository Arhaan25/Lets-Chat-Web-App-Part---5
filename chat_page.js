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
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  // console.log(user_name,msg,room_name)
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       childData = childSnapshot.val();
      //  console.log(childKey)
       if(childKey != "purpose")
       {
         firebase_message_id = childKey;
         console.log(firebase_message_id)
         message_data = childData;

	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
	       like = message_data['like'];
         row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";       
        document.getElementById("output").innerHTML += row;
       }
    });
  });
}

getData();

    function updateLike(firebase_message_id) {
        console.log("clicked on like button - " + firebase_message_id);
        button_id = firebase_message_id;
        likes = document.getElementById(button_id).value;
        updated_likes = Number(likes) + 1;
        console.log(updated_likes);
        firebase.database().ref(room_name).child(firebase_message_id).update({
            like: updated_likes
        });
    }

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}