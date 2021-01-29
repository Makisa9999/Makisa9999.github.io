//Accessed the objects that I am going to need to do various things
//related to authentication
const login_form = document.querySelector("#login_form")

const login_nav = document.getElementById("login_nav")
const logout_nav = document.getElementById("logout_nav")
const elements_nav = document.getElementById("elements_nav")
const elements_game_nav = document.getElementById("elements_game_nav")

users = ["Mario", "Mario1", "Mario2"]
pwords = ["Mario", "Mario1", "Mario2"]

login_form.addEventListener('submit', (e) => {
	console.log(e)
	e.preventDefault()

	uname = login_form["user_name"].value
	pword = login_form["user_password"].value

	console.log(uname)
	console.log(pword)


	//Option 1: Verify against a predefined list - for learning
    //Cross check credentials against a list in web page

    for (let i = 0; i <= users.length; i = i + 1) {
        if (uname === users[i]) {
            
            if (pword === pwords[i]) {
                logout_nav.style.display = "block"
	            elements_nav.style.display = "block"
	            elements_game_nav.style.display = "block"
	            login_nav.style.display = "none"
            } else {
                alert("Invalid User")
                break;
            }
        }
    }
    
    for (let i = 0; i <= users.length; i = i + 1) {
        if ((uname === users[i]) && (pword === pwords[i])) {
            logout_nav.style.display = "block"
	        elements_nav.style.display = "block"
	        elements_game_nav.style.display = "block"
	        login_nav.style.display = "none"
        }
    }

	


	//Option 2: Send to Firebase for authorization - for real. 
	

	const modal = document.querySelector('#login_modal')
	M.Modal.getInstance(modal).close();

});


//add an event listener to logout_nav
//In teh function swap the display of the various element
logout_nav.addEventListener('click', (e) => {
	logout_nav.style.display = "none"
	elements_nav.style.display = "none"
	elements_game_nav.style.display = "none"
	login_nav.style.display = "block"

});