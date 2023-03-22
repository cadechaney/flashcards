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
    round = new Round(deck)
    deck = new Deck([card1, card2, card3])
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 =  new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  })

  it('should be a function', () => {

    expect(Round).to.be.a('function')
  })

  it('should instantiate Round', () => {

    expect(round).to.be.an.instanceOf(Round)
  })

  it('currentCard should be a method to return the first card at the start of the round', () => {
    
    expect(round.currentCard()).to.equal(card1)
  })

})

