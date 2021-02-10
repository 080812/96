//YOUR FIREBASE LINKS

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
 room_name=localStorage.getItem("room_name");

 function send(){
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });

       document.getElementById("msg").value="";
 }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
Name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+Name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
