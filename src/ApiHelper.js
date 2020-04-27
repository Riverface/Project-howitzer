import $ from 'jquery';

export class ApiHelper {
	Acquire() {
		return $.get(`http://localhost:5004/api/cards/`);
	}
}
