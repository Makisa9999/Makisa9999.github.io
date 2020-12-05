var body = document.getElementById('body')
var button = document.getElementById('button')
var button1 = document.getElementById('button1') 
var formdiv = document.getElementById('formdiv')
var landingpage = document.getElementById('landing-page')
var incorrectpassword = document.getElementById('incorrect-password')
var logoutbutton = document.getElementById('logout-button')

button1.addEventListener('click', (e) => {
    formdiv.style.display = "block"
    button1.style.display = "none"
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    u = document.getElementById('email').value
    p = document.getElementById('password').value
    result = checkLogin(u, p)
    if (result === false) {
        incorrectpassword.innerHTML = "Incorrect Password or Email"
        incorrectpassword.style.color = "red"
        incorrectpassword.style.border = "1px solid red"
        incorrectpassword.style.paddingLeft = "4px"
        incorrectpassword.style.width = "fit-content"
        incorrectpassword.style.paddingRight = "4px;"
    } else {
        formdiv.style.display = "none"
        landingpage.style.display = "block"
    }
})

logoutbutton.addEventListener('click', (e) => {
    landingpage.style.display = "none"
    button1.style.display = "block"
})

var uNames = []
var pWords = []

var currU = ""

var url = "https://raw.githubusercontent.com/Makisa9999/Makisa9999.github.io/main/PlayAround/logindata.json"

fetch(url, {

    })
    .then(response => response.json())
    .then(result => {
        for (i = 0; i < result.length; i = i + 1) {
            uNames.push(result[i]["email"])
            pWords.push(result[i]["password"])
        }
    });

function checkLogin(u, p) {
    val = false;

    for (i = 0; i < uNames.length; i = i + 1) {
        if (uNames[i] === u) {
            if (pWords[i] === p) {
                val = true;
            }
        }
    }
    return val
}