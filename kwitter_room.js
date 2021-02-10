
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCdUR4J262Fp-S5TH_l-NozPzS2Exfs3vI",
      authDomain: "kwitter-67cbc.firebaseapp.com",
      databaseURL: "https://kwitter-67cbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-67cbc",
      storageBucket: "kwitter-67cbc.appspot.com",
      messagingSenderId: "395585164120",
      appId: "1:395585164120:web:4d68d538c8d5ff6f234b2d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addroom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}