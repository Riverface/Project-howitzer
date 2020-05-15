
import $ from 'jquery';
//import { ApiHelper } from './Models/ApiHelper';
import { Game } from './Models/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import png from './img/mainBackground.png';


$(document).ready(function() {
    $("#start-button").click(function() {
        $(".jumbotron").slideUp();
        $("#start-button").slideUp();
    });


  let game = new Game();

  $("button").on("click", function() {
    console.log(game.allCards, "game.allCards");



  	for (let i = 0; i < game.allEnemies.length; i++) {
  	   $(".output").append(game.allEnemies[i].name);
    }
  });
});
        for (let i = 0; i < game.allCards.length; i++) {
            if (game.allCards[i])
                for (let o = 0; o < 4; o++) {
                    game.player.hand.push(Card.findFromId(2));
                    game.player.hand.push(Card.findFromId(1));
                }
        }
    });
});
