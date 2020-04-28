import { Card } from './../src/Models/Card';
import { Player } from './../src/Models/Player';

describe("Card", function() {
	let player = new Player("tests");
	player.hand = [
		new Card("test1", 1),
		new Card("test2", 2),
		new Card("test3", 3),
		new Card("test4", 4),
		new Card("test5", 5),
		new Card("test6", 6)
	];

	it("Player has cards", function() {
		expect(player.hand.length).toEqual(6);
	});

	it("Player moved cards", function() {
		Card.moveFromId(player.hand, player.deck, 3);
		console.log(player.hand, "HAND");
		console.log(player.deck, "DECK");
		expect(player.hand.length).toEqual(5);
		expect(player.deck.length).toEqual(1);
		expect(player.deck[0].cardId).toEqual(3);
	});

});
