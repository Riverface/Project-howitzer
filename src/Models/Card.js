import $ from 'jquery';

export class Card
{
	constructor(obj, id)
	{
		this.cardId = id;
		for (const p in obj) {
			this[p] = obj[p];
		}
  }

	static findFromId(deck, id)
	{
		return deck.find(x => x.cardId === id);
	}

	static findFromName(deck, name)
	{
		return deck.find(x => x.name === name);
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

	static copyFromId(initDeck, tgtDeck, id)
	{
		tgtDeck.push(Card.findFromId(initDeck, id));
	}
	
	static shuffleDeck(deck)
	{
		// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = deck.length-1; i > 0; i--) {
	    const j = Math.floor(Math.random()*(i+1));
	    [deck[i],deck[j]] = [deck[j],deck[i]];
    }
	}

}
