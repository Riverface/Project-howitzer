import $ from 'jquery';

export class Card
{
	constructor(name, id)
	{
		this.cardId = id;
    this.name = name;
  }

	static findFromId(deck, id)
	{
		return deck.find(x => x.cardId === id);
	}

	static findFromRandom(deck)
	{
		const tgt = Math.floor(Math.random() * deck.length);
		return deck[tgt];
	}

	static findIndexFromId(deck, id)
	{
		return deck.findIndex(x => x.cardId === id);
	}

	static moveFromId(initDeck, tgtDeck, id)
	{
		tgtDeck.push(initDeck.splice(Card.findIndexFromId(initDeck,id),1)[0]);
	}

	static shuffleDeck(deck)
	{

	}
}
