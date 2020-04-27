import $ from 'jquery';

export class Coin {
	Translate(centsIN) {
		return {
			Dollar: Math.floor(centsIN / 100, 3),
			Quarter: Math.floor(centsIN % 100 / 25),
			Dime: Math.floor(centsIN % 25 / 10),
			Nickle: Math.floor(centsIN % 25 % 10 / 5),
			Penny: Math.floor(centsIN % 5)
		}
	}
}

/*
export function Numeral() {
	this.num = "E";
	this.log = "";
	this.convMatrix = ["","0","00","000","01","1","10","100","1000","02"];
	this.convInts = ["I","V","X","L","C","D","M"];
}

Numeral.prototype.translate = function(numberIn) {
	var translated = [];

	if (isNaN(parseInt(numberIn))) {this.num = "Not a number!"; this.log = "nan"; return;};
	if (parseInt(numberIn) >= 4000) {this.num = "Too high!"; this.log = "high"; return;};
	if (parseInt(numberIn) < 0) {this.num = "Negatives aren't allowed!"; this.log = "neg"; return;};
	if (parseFloat(numberIn) % 1 != 0) {this.num = "Whole numbers only!"; this.log = "float"; return;};

	var numbers = numberIn.split("").reverse();

	for (var i=0; i<numbers.length; i++) {
		var temp = this.convMatrix[parseInt(numbers[i])];
		var temp2 = "";
		for (var j=0; j<temp.length; j++) {
			temp2 += this.convInts[parseInt(temp.charAt(j))+(i*2)]; // Must... suppress... ego...
		};
		translated.push(temp2);
	};

	this.num = translated.reverse().join("");
	this.log = "pass";
	return;
};*/
