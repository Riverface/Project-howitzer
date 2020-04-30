import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import png from './img/mainBackground.png';

let service = new ApiHelper();

$(document).ready(function() {

  $("#start-button").click(function () {
    $('.jumbotron').slideUp();
    $('#start-button').slideUp();
  });

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
