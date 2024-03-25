var firebaseConfig = {
    apiKey: "AIzaSyCIAcMCj1RgvWsqdBSDem8U4ivtZRt1LGY",
    authDomain: "kwitter-ad4a9.firebaseapp.com",
    databaseURL: "https://kwitter-ad4a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-ad4a9",
    storageBucket: "kwitter-ad4a9.appspot.com",
    messagingSenderId: "991798495933",
    appId: "1:991798495933:web:4cf6cfa3928dbc3295c5d4",
    measurementId: "G-SRSQX1DTV2"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS
function add(){
    User=document.getElementById("Un").value;
    Age=document.getElementById("Red5").value;
    School=document.getElementById("blue").value;
    firebase.database().ref("/").child(User).update({
        "name":User,"age":Age,"school":School
    })
}