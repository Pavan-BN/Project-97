const firebaseConfig = {
  apiKey: "AIzaSyCs6Z7GIQEJJhVcstN1issDWB8bzr6dD10",
  authDomain: "project-kwitter-f3e6d.firebaseapp.com",
  databaseURL: "https://project-kwitter-f3e6d-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-f3e6d",
  storageBucket: "project-kwitter-f3e6d.appspot.com",
  messagingSenderId: "398118197239",
  appId: "1:398118197239:web:10047394acf69968c480f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function addUser()
{
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location="kwitter_room.html";
    
}