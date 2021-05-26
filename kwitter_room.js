//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCrbC_iQhPy8zymGZvnbSl0N-aAq4So1iw",
    authDomain: "p-94-9e2fc.firebaseapp.com",
    databaseURL: "https://p-94-9e2fc-default-rtdb.firebaseio.com",
    projectId: "p-94-9e2fc",
    storageBucket: "p-94-9e2fc.appspot.com",
    messagingSenderId: "537920499753",
    appId: "1:537920499753:web:f8065c90e3f1a7a42aec38",
    measurementId: "G-7XJTXBM50R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name" 
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_room.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html" ;
}
