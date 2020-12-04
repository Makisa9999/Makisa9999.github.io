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