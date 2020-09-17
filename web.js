


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCCXB3pDKZrBkOJ8ilLUxWzDExscuZQ1uQ",
  authDomain: "login-df978.firebaseapp.com",
  databaseURL: "https://login-df978.firebaseio.com",
  projectId: "login-df978",
  storageBucket: "login-df978.appspot.com",
  messagingSenderId: "214912402384",
  appId: "1:214912402384:web:13abc05ea2a9b2335d6fd5",
  measurementId: "G-KX8JPDVQS3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth()
function signUp() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}



function signIn() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));




}


function signOut() {

  auth.signOut();
  alert("Signed Out");

}



auth.onAuthStateChanged(function (user) {

  if (user) {

    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in

  } else {

    alert("No Active User");
    //no user is signed in
  }



});
