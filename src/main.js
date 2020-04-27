import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let service = new ApiHelper();

$(document).ready(function() {
  let data = service.Acquire();
	/*for (let i = 0; i < data.length; i++) {
	   $(".output").append(data[i]);
  }*/
  data.then(function(response) {
    console.log(response);

    //inject(service.process($("#input").val(), response), myChart);
  	for (let i = 0; i < response.length; i++) {
  	   $(".output").append(response[i].name);
    }
  });
});
