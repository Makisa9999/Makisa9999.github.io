var uNames = ["user1", "user2", "user3"]
var pWords = ["pword1", "pword2", "pword3"]


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
