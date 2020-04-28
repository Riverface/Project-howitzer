import $ from 'jquery';

export class ApiHelper {
	get()
	{
		return $.get("DBs/cards.json");
	}
}
