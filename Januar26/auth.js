// We take every element in the nav bar and make it constant though the whole document
const login_form = document.querySelector("#login_form")
const login_nav = document.getElementById('login_nav')
const logout_nav = document.getElementById('logout_nav')
const elements_nav = document.getElementById('elements_nav')
const elements_game_nav = document.getElementById('elements_game_nav')

login_form.addEventListener("submit", function (e) {
    e.preventDefault()

    uname = login_form["user_name"].value
    pword = login_form["password"].value
    console.log(uname)
    console.log(pword)

    //Option 1: Verify against a predefined list - for learning.
    //Cross check credentials against a list in web page

    logout_nav.style.display = "block"
    elements_nav.style.display = "block"
    elements_game_nav.style.display = "block"
    login_nav.style.display = "none"

    //add an event listener to logout nav
    //In the function swap the display of the elements


    //Option 2: Send to Firebase for authorization - for real.
    const modal = document.querySelector('#modal1')
    M.Modal.getInstance(modal).close()
})

logout_nav.addEventListener('click', function (e) {
    logout_nav.style.display = "none"
    elements_nav.style.display = "none"
    elements_game_nav.style.display = "none"
    login_nav.style.display = "block"

})