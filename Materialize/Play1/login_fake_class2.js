var uNames = []
var pWords = []

var currU = ""

var landingPage = document.getElementById('landing')
var homePage = document.getElementById('home')


var url = ""

//fetch -> return a promise, an object that you can check before you do things
//then only run if fetch is done.

fetch(url, {

    })
    .then(response => response.json())
    .then(result => {
        console.log(result)

        for (i = 0; i < result.length; i = i + 1) {
            uNames.push(result[i]["id"])
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

//console.log(checkLogin("user1", "pword1"))
//console.log(checkLogin("user1", "pword2"))
//console.log(checkLogin("user3", "pword3"))
//console.log(checkLogin("user5", "pword5"))
