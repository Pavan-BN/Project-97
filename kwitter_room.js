var firebaseConfig = {
   apiKey: "AIzaSyCs6Z7GIQEJJhVcstN1issDWB8bzr6dD10",
   authDomain: "project-kwitter-f3e6d.firebaseapp.com",
   databaseURL: "https://project-kwitter-f3e6d-default-rtdb.firebaseio.com",
   projectId: "project-kwitter-f3e6d",
   storageBucket: "project-kwitter-f3e6d.appspot.com",
   messagingSenderId: "398118197239",
   appId: "1:398118197239:web:10047394acf69968c480f2"
 };
 
 // Initialize Firebase
var app = initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 document.getElementById("username").innerHTML = "Welcome"+user_name + "!";

  function addRoom()
  {
     document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
        purpose: "adding roomname"
     }) ;
     localStorage.setItem("roomname",room_name);
    window.location = "kwitter_page.html";
  }
 
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room_names : " + Room_names);
  row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div>"
  document.getElementById("output").innerHTML  += row;

  //End code
  });});}
getData();

function rediectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("Room_name", name);
   window.location = "kwitter_room.html";

}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}