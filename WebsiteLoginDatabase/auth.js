////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

function checkNewAccount (u, uc, p, pc) {
    if ((u === uc) && (p === pc)) {
        uNames.push(u)
        pWords.push(p)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS IS INITIALIZING MODALS ON MY WEBPAGE


document.addEventListener('DOMContentLoaded', function() {
    options = {opacity: 0.90, inDuration: 1250, outDuration: 625, startingTop: "100%"}   
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONSTANTS

const login_form = document.getElementById("login_form")
const username_Sign_In_Form = document.getElementById("username_sign_in_form")
const password_Sign_In_Form = document.getElementById("password_sign_in_form")
const welcome_page = document.getElementById("welcome_page")
const login_button_in_navbar = document.getElementById("login_button_in_navbar")
const logout_button_in_navbar = document.getElementById("logout_button_in_navbar")
const elements_button_in_navbar = document.getElementById("elements_button_in_navbar")
const elements_game_button_in_navbar = document.getElementById("elements_game_button_in_navbar")
const sign_in_button_in_the_login_form = document.getElementById("sign_in_button_in_the_login_form")
const modal_for_forms = document.querySelector("#modal_for_forms")
const switch_to_register_button_in_login_form = document.getElementById("switch_to_register_button_in_login_form")
const register_form = document.getElementById("register_form")
const switch_to_login_form = document.getElementById("switch_to_login_form")
const create_new_account_button_register_form = document.getElementById("create_new_account_button_register_form")
const username_register_form = document.getElementById("username_register_form")
const username_confirm_register_form = document.getElementById("username_confirm_register_form")
const password_register_form = document.getElementById("password_register_form")
const password_confirm_register_form = document.getElementById("password_confirm_register_form")


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Other Code

// Here we are listening to submit of that form
login_form.addEventListener("submit", (e) => {
    // Preventing reload on form submit
    e.preventDefault()
    // Checking if we use the values that we put in the input fields are username and password which are going to unlock the account
    if (checkLogin(username_Sign_In_Form.value, password_Sign_In_Form.value) === true) {
        // If function checkLogin returns true, this code will proceed.
        // It will display welcome page
        welcome_page.style.display = "block"
        // It will remove the login button in the navbar
        login_button_in_navbar.style.display = "none"
        // It will display logout button from the navbar
        logout_button_in_navbar.style.display = "block"
        // It will display elements button in navbar
        elements_button_in_navbar.style.display = "block"
        // It will display elements game button in navbar
        elements_game_button_in_navbar.style.display = "block"
    } else {
        // If the function returns false, then it will just simply reload the page and it will kick the user out from his account
        location.reload()
    }
})

// When sign in button is pressed on the form, then this will close the modal
sign_in_button_in_the_login_form.addEventListener("click", function (e) {
    M.Modal.getInstance(modal_for_forms).close()
})

// When clicked on teh logout button in the navbar, it will reload the page and then it will kick the user out of his account
logout_button_in_navbar.addEventListener("click", (e) => {
    location.reload()
})

// When pressed on this button, it will switch the view so you can make a new account.
switch_to_register_button_in_login_form.addEventListener("click", function (e) {
    login_form.style.display = "none"
    switch_to_register_button_in_login_form.style.display = "none"
    register_form.style.display = "block"
    switch_to_login_form.style.display = "block"
})

    
login_button_in_navbar.addEventListener("click", (e) => {
// how to remove the button of back to login from the form
    
})

switch_to_login_form.addEventListener("click", (e) => {
    login_form.style.display = "block"
    register_form.style.display = "none"
    switch_to_login_form.style.display = "none"
    switch_to_register_button_in_login_form.style.display = "block"
})

register_form.addEventListener('submit', (e) => {
    e.preventDefault()
    M.Modal.getInstance(modal_for_forms).close()
})

create_new_account_button_register_form.addEventListener('click', function (e) {
    checkNewAccount(username_register_form.value, username_confirm_register_form.value, password_register_form.value, password_confirm_register_form.value)
})