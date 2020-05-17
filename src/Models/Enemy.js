import $ from 'jquery';

export class Enemy
{
	constructor(obj, id)
	{
		this.enemyId = id;
		this.hand = [];
    this.main = [];
		this.discard = [];
		this.statuses = [];
		for (const p in obj) {
			this[p] = obj[p];
		}
  }

}
