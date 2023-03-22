const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round')
const Deck = require('../src/Deck')

let round;
let card1;
let card2;
let card3;
let deck;

describe('Round', () => {

  beforeEach('setup', () => {
    turn = new Turn()
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 =  new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', () => {

    expect(Round).to.be.a('function')
  })

  it('should instantiate Round', () => {

    expect(round).to.be.an.instanceOf(Round)
  })

  it('should have a deck of cards', () => {
    
    expect(round.deck).to.equal(deck)
  })

  it('should have a method that returns current card', () => {
    round.takeTurn()
    
    expect(round.returnCurrentCard(), card1)
  })

  it('the next card becomes the current card', () => {
    round.takeTurn()
    round.takeTurn()
    expect(round.returnCurrentCard(), card2)
  })

  it('should be able to store correct Answers', () => {
    expect(round.correctGuesses).to.deep.equal([])
  })

  it('should be able to store incorrect answers', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should give feedback if answer is incorrect', () => {
    expect(round.takeTurn('pug')).to.deep.equal('incorrect!')
  })

  it('should give feedback if answer is correct', () => {
    expect(round.takeTurn('sea otter')).to.deep.equal('correct!')
  })

  it('should calculate the percentage of correct answers', () => {
    round.takeTurn('sea otter')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('gall bladdersssss')
    expect(round.calculatePercentCorrect()).to.equal(50)
    round.takeTurn('Fitzgerald')
    expect(round.calculatePercentCorrect()).to.equal(66)
  })

  it('should have a method to end the round', () => {
    round.takeTurn('sea otter')
    round.takeTurn('gall bladdersssss')
    round.takeTurn('Fitzgerald')
  
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
  })
})

