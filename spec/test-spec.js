import { Coin } from './../src/backend.js';

describe("Coin", function() {
	const coin = new Coin();

	it("should convert $1.41 to 1 dollar, 1 quarter, 1 dime, 1 nickle, 1 penny", function() {
		const out = coin.Translate(141);
		expect(out.Dollar).toEqual(1);
		expect(out.Quarter).toEqual(1);
		expect(out.Dime).toEqual(1);
		expect(out.Nickle).toEqual(1);
		expect(out.Penny).toEqual(1);
	});

});
