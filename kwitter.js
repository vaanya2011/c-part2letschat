
firebase.initializeApp(firebaseConfig);
function AddUser(){
   
    window.location="kwitter_room.html";
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding User"
    });
}
const firebaseConfig = {
    apiKey: "AIzaSyAG8uQQeNP9oha-SSMiWACCu1n3tJdEX1E",
    authDomain: "kwitter-9b53a.firebaseapp.com",
    databaseURL:"https://kwitter-9b53a-default-rtdb.firebaseio.com/",
    projectId: "kwitter-9b53a",
    storageBucket: "kwitter-9b53a.appspot.com",
    messagingSenderId: "802942055710",
    appId: "1:802942055710:web:26e83ca99c1f8f43df450f"
  };
 // user_name=document.getElementById("user_name").value;
  //localStorage.setItem("user_name", user_name);