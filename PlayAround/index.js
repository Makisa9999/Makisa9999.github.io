var body = document.getElementById('body')
var button = document.getElementById('button')
var button1 = document.getElementById('button1') 
var formdiv = document.getElementById('formdiv')

button1.addEventListener('click', (e) => {
    formdiv.style.display = "block"
    button1.style.display = "none"
})

button.addEventListener('click', (e) => {
    console.log("You are signed in.")
})

var uNames = []
var pWords = []

var currU = ""

var url = "https://raw.githubusercontent.com/Makisa9999/Makisa9999.github.io/main/PlayAround/index.json"

fetch(url, {

    })
    .then(response => response.json())
    .then(result => {
        console.log(result)

        for (i = 0; i < result.length; i = i + 1) {
            uNames.push(result[i]["email"])
            pWords.push(result[i]["password"])
        }
        console.log(uNames)
        console.log(pWords)
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