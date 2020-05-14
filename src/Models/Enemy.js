import $ from 'jquery';

export class Enemy
{
	constructor(obj, id)
	{
		this.enemyId = id;
		for (const p in obj) {
			this[p] = obj[p];
		}
  }

}
