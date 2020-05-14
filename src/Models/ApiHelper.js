import $ from 'jquery';

export class ApiHelper
{
	static get(dbname)
	{
		return $.get("DBs/"+dbname+".json");
	}
}
