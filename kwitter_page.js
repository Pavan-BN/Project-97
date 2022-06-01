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
room_name = localStorage.getItem("Room_name");

function send()
{
    message = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

