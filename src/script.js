let win = Math.floor(Math.random() * 16)
let lose = Math.floor(Math.random() * 16)

const bushes = (bush) => {
    if(bush === win) {
        document.getElementById(`bushes${win}`).innerHTML = "<img src=\"charmander.png\" height=\"200px\" width=\"200px\"/>"
        document.getElementById("outcome").innerHTML = "Congratulations! You found Charmander!"
        document.getElementById("table").innerHTML = "<img src=\"charmander.png\" height=\"300px\" width=\"300px\"/>"
    } else if(bush === lose) {
        document.getElementById(`bushes${lose}`).innerHTML = "<img src=\"water.png\" height=\"200px\" width=\"200px\"/>"
        document.getElementById("outcome").innerHTML = "Charmander escaped! You lose."
        document.getElementById("table").innerHTML = "<img src=\"water.png\" height=\"300px\" width=\"300px\"/>"
    } else {
        document.getElementById(`bushes${bush}`).innerHTML = "<img src=\"fire.png\" height=\"200px\" width=\"200px\"/>"
    }
}
