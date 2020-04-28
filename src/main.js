import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let service = new ApiHelper();

$(document).ready(function() {
  let data = service.get();

  data.then(function(response) {
    console.log(response.length);

  	for (let i = 0; i < response.length; i++) {
  	   $(".output").append(response[i].name);
    }
  });

});
