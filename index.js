/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functons


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constants
const myBar = document.getElementById("myBar")
const contact_me_form = document.getElementById("contact_me_form")
const email_contact = document.getElementById("email_contact")
const message_contact = document.getElementById("message_contact")
const date_contact = document.getElementById("date_contact")
const which_language_input = document.getElementById("which_language_input")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Other functions

// When the user scrolls the page, execute myFunction
window.addEventListener("scroll", (e) => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var scrolled = (winScroll / 3649) * 100;
    myBar.style.width = scrolled + "%";
})

contact_me_form.addEventListener("submit", function (e) {
    e.preventDefault()
    var email_input = email_contact.value
    console.log(email_input)
    var message_input = message_contact.value
    console.log(message_input)
    var date_input = date_contact.value
    console.log(date_input)
    var which_lang_input = which_language_input.value
    console.log(which_lang_input)
})

