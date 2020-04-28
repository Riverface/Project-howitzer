import $ from 'jquery';

export class ApiHelper
{
	static get()
	{
		return $.get("DBs/cards.json");
	}
}
