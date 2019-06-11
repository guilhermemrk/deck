const readline = require('readline-sync')
var i = 1

var numDeck = readline.question("How many decks?")
var cards = numDeck*52
console.log(`Decks: ${numDeck}\nCards: ${cards} (52 per deck)`);

while (i = 1) {
  let option = readline.question("Select an option:\n\n1- Remove a card\n2- Calculate probability\n\nPress any other key to exit.")
  
  if (option = '1'){
    var justKidding = readline.question('What card would you like to remove?')
    cards--
    console.log(`${justKidding} got removed from the deck, ${cards} remaining`)
  }
  else if (option = '2') {
    var selected = readline.question('What card would you like to pull?')
    console.log(`You selected ${selected}!`)
    console.log(`The probability of pulling ${selected} is ${1/cards}`);
  } else {
    process.exit(1)
  }
}
