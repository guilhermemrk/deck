const c = require('./config.json')
const l = require(`./locale/${c.locale}.json`)
const readline = require('readline-sync')
const prefix = ' > '

// Creates a deck
class Deck {
  constructor() {
    this.deck = [];

    const suits = [l.hearts, l.spades, l.clubs, l.diamonds];
    const values = [l.ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, l.jack, l.queen, l.king];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(values[value]+ ' ' + l.of + ' ' + suits[suit]);
      }
    }
  }

  shuffle(){
    const { deck } = this;
    let m = deck.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }
}

// Remove-a-card function
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

// Deal-a-card function
function deal() {

}

// Duplicate deck function
function repeat(array, n){
    var out = [];
    for(var i = 0; i < n; i++) {
        out = out.concat(array);
    }
    return out;
}

const deck1 = new Deck();
const dTemplate = new Deck();
var dt = dTemplate.deck;
var originalArray = deck1.deck;

console.log(` How many decks?`);
var numDeck = parseInt(readline.question(prefix))

var array = repeat(originalArray, numDeck);
console.log(` ${numDeck} deck/s created, with 52 cards each (${array.length} total).`);
var deckFloat = parseInt(array.length/52)

while (true) {
  console.log(` Choose an option!`);
  console.log();
  console.log(` 1- Remove a card.`);
  console.log(` 2- Add a card.`);
  console.log(` 3- Show deck.`);
  console.log(` 4- ?`);
  console.log(` 5- Calculate probability.`);
  console.log();
  console.log(` Press any other key to exit.`);
  console.log();

  let option = readline.question(prefix);

  if (option === '1') {
    console.log(` What card would you like to remove?`);
    // THIS IF IS DELETING EVERY CARD WITH THAT VALUE
    console.log();

    let wRem = readline.question(prefix);

    let remContain = array.includes(wRem);

    if (remContain == true) {
      removeA(array, wRem)
      console.log(` ${wRem} was removed from the deck. ${array.length} cards left.`);
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` There is no ${wRem} in this deck. Canceled.`)
      let wait = readline.question(prefix)
      console.log();
    }

  }
  else if (option === '2') {
    console.log(` What card would you like to add?`);
    console.log();

    let wAdd = readline.question(prefix);
    let remContain = dt.includes(wAdd);

    if (remContain == true) {
      array.push(wAdd)
      console.log(` ${wAdd} was add to the deck.`);
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` ${wAdd} is an invalid card.`)
      let wait = readline.question(prefix)
      console.log();
    }
  }
  else if (option === '3') {
    console.log(array);
    console.log(` ${deckFloat} decks, ${array.length} cards total.`);
    let wait = readline.question(prefix)
    console.log();
  }
  else if (option === '4') {
    // Dunno
  }
  else if (option === '5') {
    console.log(` Which card would you like to pull?`)
    let pullCard = readline.question(prefix)
    // let dtl = dt.toLowerCase()
    // let remContain = dtl.includes(pullCard.toLowerCase());
    let remContain = dt.includes(pullCard);

    if (remContain == true) {
      // add a var that tells you how many of those there is in the card pool, I'll use pNum as a placeholder
      pNum = 1;

      var probability = (pNum/array.length)*100
      console.log(` The probability of pulling the ${pullCard} is ~${probability.toFixed(2)}%.`);
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` ${pullCard} is an invalid card.`)
      let wait = readline.question(prefix)
      console.log();
    }
  } else {
    process.exit(1)
  }

}
