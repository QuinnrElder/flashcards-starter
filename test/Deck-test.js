const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
  const deck = new Deck([card1, card2, card3]);

  it( 'Should return the length of the deck.', function () {
    
    deck.countingCards()

    expect(deck.countingCards()).to.equal(3)
  });

  it.skip('', function () {

  });

  it.skip('', function () {

  });

  it.skip('', function () {

  });

  it.skip('', function () {

  });
});