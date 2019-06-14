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
}
// Remove-a-card function
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        if (arr.indexOf(what) !== -1){
          ax = arr.indexOf(what)
          arr.splice(ax, 1)
        } else {}
    }
    return arr;
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
console.log(` ${l.howMany}`);
var numDeck = parseInt(readline.question(prefix))
var array = repeat(originalArray, numDeck);
var count = {};
array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(` ${numDeck} ${l.HowManyCreated} (${array.length} ${l.cardTotal}).`);
var deckFloat = parseInt(array.length/52)
while (true) {
  console.log(` ${l.chooseOption}`);
  console.log();
  console.log(` 1 - ${l.optionOne}.`);
  console.log(` 2 - ${l.optionTwo}.`);
  console.log(` 3 - ${l.optionThree}.`);
  console.log(` 4 - ${l.optionFour}.`);
  console.log(` 5 - ${l.optionFive}.`);
  console.log(` 6 - ${l.aboutThisScript}.`);
  console.log();
  console.log(` ${l.pressExit}.`);
  console.log();
  let option = readline.question(prefix);
  if (option === '1') {
    console.log(` ${l.whatRemove}?`);
    console.log();
    let wRem = readline.question(prefix);
    let remContain = array.includes(wRem);
    if (remContain == true) {
      removeA(array, wRem)
      console.log(` [${wRem}] ${l.gotRemoved}. ${array.length} ${l.cardsLeft}.`);
      count[wRem]--
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` ${l.thereIsNo} [${wRem}] ${l.inThisDeck}. ${l.canceled}.`)
      let wait = readline.question(prefix)
      console.log();
    }
  }
  else if (option === '2') {
    console.log(` ${l.whatAdd}?`);
    console.log();
    let wAdd = readline.question(prefix);
    let remContain = dt.includes(wAdd);
    if (remContain == true) {
      array.push(wAdd)
      console.log(` [${wAdd}] ${l.wasAdded}.`);
      count[wAdd]++
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` [${wAdd}] ${l.isInvalid}.`)
      let wait = readline.question(prefix)
      console.log();
    }
  }
  else if (option === '3') {
    console.log(count);
    console.log();
    console.log(` ${deckFloat} ${l.deck}s, ${array.length} ${l.cardTotal}.`);
    let wait = readline.question(prefix)
    console.log();
  }
  else if (option === '4') {
    console.log(` ${l.whatCheckDup}?`);
    let answer = readline.question(prefix);
    console.log();
    console.log(` ${l.thereIsAre} ${count[answer]} [${answer}] ${l.inThisPool}.`);
    console.log();
    let wait = readline.question(prefix)
  }
  else if (option === '5') {
    console.log(` ${l.whichPull}?`)
    let pullCard = readline.question(prefix)
    let remContain = dt.includes(pullCard)
    if (remContain == true) {
      var probability = (count[pullCard]/array.length)*100
      console.log(` ${l.theProbabilityOf} [${pullCard}] ${l.is} ~${probability.toFixed(2)}%.`);
      let wait = readline.question(prefix)
      console.log();
    } else {
      console.log(` ${pullCard} ${l.isInvalid}.`)
      let wait = readline.question(prefix)
      console.log();
    }
  }
  else if (option === '6') {
    console.log(` ${l.aboutThisScript}`);
    console.log(` ---------------------------`);
    console.log(` ${l.projectName}: ${c.projectName}`);
    console.log(` ${l.projectVersion}: ${c.projectVersion}`);
    console.log(` ${l.projectLibs}: ${c.projectLibs}`);
    console.log(` ${l.projectAuthor}: ${c.projectAuthor}`);
    console.log(` ${l.projectLocale}: ${c.locale} (${c.locale}.json)`);
    console.log(` ${l.projectDescription}: ${l.projectDescriptionText}`);
    console.log();
    let wait = readline.question(prefix)
  } else {
    process.exit(1)
  }
}
