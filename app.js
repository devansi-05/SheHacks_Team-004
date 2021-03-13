
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

<<<<<<< HEAD
const loginBtn = document.querySelector("#loginbtn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log("Logged in user!");
      auth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          //console.log(user);
          window.open("index.html");

          var user = auth.currentUser;

          if (user != null) {
            var email_id = user.email;
            localStorage.setItem("myItem", user.uid);
            document.getElementById("user_para").innerHTML =
              "Welcome User : " + email_id;
          }
        } else {
          // No user is signed in.
        }
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
});

const signupBtn = document.querySelector("#signupinbtn");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log("User signed up!");
  });
});

function logout() {
  localStorage.removeItem("myItem");
  auth.signOut();
=======

document.getElementById("loginbtn").addEventListener('click', login);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    window.open("index.html");

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.


  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function signup(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}

function logout(){
  firebase.auth().signOut();
>>>>>>> b9fc2dde46bd1a44ef13a7eb2eeca8c96eec092f
}
