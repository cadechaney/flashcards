const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')

let card1;
let card2;
let card3;
let deck;

describe('Deck', () => {

  beforeEach('setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 =  new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3])
  })

  it('should be a function', () => {

    expect(Deck).to.be.a('function')
  })

  it('should instantiate deck', () => {

    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should take in an array of cards', () => {
    
    expect(deck.cards).to.be.an('array')
  })
   
  it('should have a method that returns number of cards in the deck', () => {

    expect(deck.countCards()).to.equal(3)
  })


})