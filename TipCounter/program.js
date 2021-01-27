var form = document.getElementById('form-submit')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    var restaurantSatisfaction = document.getElementById('restaurantSatisfaction').value
    var inputField = document.getElementById('input-field').value
    var totalTip = inputField * (restaurantSatisfaction / 100)
    var result = document.getElementById('result')
    result.innerHTML = "It is suggested that you tip this restaurant: $" + totalTip + "."
})