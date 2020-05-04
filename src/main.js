import $ from 'jquery';
import { ApiHelper } from './Models/ApiHelper';
import { Game } from './Models/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  let game = new Game();

  $("button").on("click", function() {
    console.log(game.allCards, "game.allCards");

  	for (let i = 0; i < game.allCards.length; i++) {
  	   $(".output").append(game.allCards[i].name);
    }
  });

});
