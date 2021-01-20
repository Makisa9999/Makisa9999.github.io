var val = "00:03"

var h = val.substring(0, 2)
var m = val.substring(3, 5)
h = parseInt(h)
var timeOfDay = "AM"

if (h > 12 && h <= 23) {
    timeOfDay = "PM"
    h = h - 12   
} else if (h === 0 || h === 12) {
    h = 12
}

console.log(h + ":" + m + " " + timeOfDay)
