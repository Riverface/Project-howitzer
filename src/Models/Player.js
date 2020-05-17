import $ from 'jquery';

export class Player
{
	constructor(obj, id)
	{
		this.playerId = id;
		this.hand = [];
    this.main = [];
		this.discard = [];
		this.statuses = [];
		for (const p in obj) {
			this[p] = obj[p];
		}
  }

}
