import $ from 'jquery';

export class ApiHelper {
	Get()
	{
		//return $.get(`http://localhost:5004/api/cards/`);
		//return $.get('/DBs/cards.json');
		return $.getJSON( "DBs/cards.json");
	}
	Post(obj)
	{
		//$.post('http://localhost:5004/api/cards', JSON.stringify(obj), null, "json");
		/*$.ajax({
	    'type': 'POST',
	    'url': 'http://localhost:5004/api/cards/',
	    'contentType': 'application/json',
	    'data': JSON.stringify(obj),
	    'dataType': 'json'
		});*/
		$.post('/DBs/cards.json', JSON.stringify(obj), null, "json");
	}
}
