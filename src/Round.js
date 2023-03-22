const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
    this.correctGuesses = []
    
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard())
    this.turns ++
    if (guess !== currentTurn.card.correctAnswer) {
      this.incorrectGuesses.push(currentTurn.card.id)
    } 
    else if (guess === currentTurn.card.correctAnswer) {
      this.correctGuesses.push(currentTurn.card.id)
    }
    
   return currentTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.turns)) * 100)
  }

  endRound() {

  }

}

module.exports = Round;