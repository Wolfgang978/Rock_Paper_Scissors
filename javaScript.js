
var first = confirm("Do you want to play Rock Paper Scissors?")
var computer = ["R", "P", "S"]
var random = 0;
var computerChoice = computer[random]
var wins = 0
var ties = 0
var losses = 0





while (first === true) {
  

  if (first === true) {
    var random = Math.floor(Math.random() * computer.length + 1) - 1;
    var computerChoice = computer[random]
    var second = prompt("Choose 'R', 'P' or 'S'")
    while (second !== ("R" || "S" || "P")) {
      window.alert("Please make the right input.")
      var second = prompt("Choose 'R', 'P' or 'S'")
    } 
    window.alert("Computer chose " + computerChoice)
  if (random === 0 && second === "R") {
    window.alert("It's a draw")
    ties++
  } else if (random === 0 && second === "P") {
    window.alert("You Win")
    wins++
  } else if (random === 0 && second === "S") {
    window.alert("You lose")
    losses++
  } else if (random === 1 && second === "R") {
    window.alert("You lose")
    losses++
  } else if (random === 1 && second === "P") {
    window.alert("It's a draw")
    ties++
  } else if (random === 1 && second === "S") {
    window.alert("You Win")
    wins++
  } else if (random === 2 && second === "R") {
    window.alert("You Win")
    wins++
  } else if (random === 2 && second === "P") {
    window.alert("You lose")
    losses++
  } else if (random === 2 && second === "S") {
    window.alert("It's a draw")
    ties++
  }
}
window.alert("You won " + wins +" matches. Tied " + ties + " matches. And lost " + losses + " matches.")
var first = confirm("Do you want to play again?")
}
window.alert("Congragulations! You won " + wins +" matches. Tied " + ties + " matches. And lost " + losses + " matches." )




















