//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is just giving the modal some properties and initializing it
document.addEventListener('DOMContentLoaded', function() {
    options = {opacity: 0.90, inDuration: 1250, outDuration: 625, startingTop: "100%"}   
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS IN THIS PAGE

var uNames = ["Makisa9999"]
var pWords = ["Mario1"]
function checkLogin (u, p) {
    var username = uNames.includes(u)
    var password = pWords.includes(p)
    if ((username === true) && (password === true)) {
        return true
    }
    return false
}

function writeUserAccount(userId, username, password) {
    database.ref('users/' + userId).update(
    {
      username: username,
      password: password,
    }
  )};

function checkNewAccount (u, uc, p, pc) {
    if ((u === uc) && (p === pc)) {
        firebase.auth().createUserWithEmailAndPassword(u, p)
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
}

function signIn(u, p) {
    firebase.auth().signInWithEmailAndPassword(u, p)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signOut() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constants for making other code
const myBar = document.getElementById("myBar")
const switch_to_register_button_in_login_form = document.getElementById("switch_to_register_button_in_login_form")
const login_form = document.getElementById("login_form")
const register_form = document.getElementById("register_form")
const switch_to_login_form = document.getElementById("switch_to_login_form")
const username_Sign_In_Form = document.getElementById("username_sign_in_form")
const password_Sign_In_Form = document.getElementById("password_sign_in_form")
const sign_in_button_in_the_login_form = document.getElementById("sign_in_button_in_the_login_form")
const modal_for_forms = document.querySelector("#modal_for_forms")
const create_new_account_button_register_form = document.getElementById("create_new_account_button_register_form")
const username_register_form = document.getElementById("username_register_form")
const username_confirm_register_form = document.getElementById("username_confirm_register_form")
const password_register_form = document.getElementById("password_register_form")
const password_confirm_register_form = document.getElementById("password_confirm_register_form")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Other functions

// When the user scrolls the page, execute myFunction
// This function is connected with the scroll bar on top
window.addEventListener("scroll", (e) => {
    // This is determining where on the page are you
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // This is determining what percentage of page you scrolled through so it can find the value which to fill in for the width of the line
    var scrolled = (winScroll / 263) * 100;
    // This is just giving a width to the div so it can show how much you scrolled.
    myBar.style.width = scrolled + "%";
})

// When pressed on this button, it will switch the view so you can make a new account.
switch_to_register_button_in_login_form.addEventListener("click", (e) => {
    login_form.style.display = "none"
    switch_to_register_button_in_login_form.style.display = "none"
    register_form.style.display = "block"
    switch_to_login_form.style.display = "block"
})

// When pressed on this button, it will switch the view so you can login.
switch_to_login_form.addEventListener("click", (e) => {
    login_form.style.display = "block"
    switch_to_register_button_in_login_form.style.display = "block"
    register_form.style.display = "none"
    switch_to_login_form.style.display = "none"
})

// Here we are listening to submit of that form
//login_form.addEventListener("submit", (e) => {
    // Preventing reload on form submit
    //e.preventDefault()
    // Checking if we use the values that we put in the input fields are username and password which are going to unlock the account
    //if (checkLogin(username_Sign_In_Form.value, password_Sign_In_Form.value) === true) {
        // If function checkLogin returns true, this code will proceed.
        //window.open("proceed.html")
    //} else {
        // If the function returns false, then it will just simply reload the page and it will kick the user out from his account
        //location.reload()
    //}
//})

// When sign in button is pressed on the form, then this will close the modal
sign_in_button_in_the_login_form.addEventListener("click", function (e) {
    e.preventDefault()
    signIn(username_Sign_In_Form.value, password_Sign_In_Form.value)
    alert("You are signed in!")
    M.Modal.getInstance(modal_for_forms).close()
})

register_form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkNewAccount(username_register_form.value, username_confirm_register_form.value, password_register_form.value, password_confirm_register_form.value)
    alert("You created a new account!")
    M.Modal.getInstance(modal_for_forms).close()
})

