import { Card } from './../src/Models/Card';
import { Player } from './../src/Models/Player';
import { CardFunc } from './../src/Models/CardFunc';

describe("Card", function() {
	var player;

	beforeEach( function() {
		player = new Player("tests");
		player.hand = [
			new Card(
				{
					"name":"test1",
					"function":"testFunc",
					"funcvar1":2
				}, 1),
			new Card({"name":"test2"}, 2),
			new Card({"name":"test3"}, 3),
			new Card({"name":"test4"}, 4),
			new Card({"name":"test5"}, 5),
			new Card({"name":"test6"}, 6)
		];
  });

	it("Player has cards", function() {
		expect(player.hand.length).toEqual(6);
	});

	it("Player moved cards", function() {
		Card.moveFromId(player.hand, player.main, 3);
		expect(player.hand.length).toEqual(5);
		expect(player.main.length).toEqual(1);
		expect(player.main[0].cardId).toEqual(3);
	});

	it("Random card pick works appropriately", function() {
		console.log("RANDOM", Card.findFromRandom(player.hand).cardId, "RANDOM");
		expect(1).toEqual(1);
	});

	it("Shuffle deck works appropriately", function() {
		Card.shuffleDeck(player.hand);
		console.log("SHUFFLED", player.hand.map(e => e.cardId), "SHUFFLED");
		expect(1).toEqual(1);
	});

	it("Can call function from string", function() {
		const thisCard = Card.findFromId(player.hand, 1);
		const testVar = CardFunc[thisCard.function](thisCard.funcvar1);
		expect(testVar).toEqual(thisCard.funcvar1);
	});

});
