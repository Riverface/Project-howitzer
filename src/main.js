import $ from 'jquery';
import { Game } from './Models/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function drawCard(name)
{
  return `<img class="card" src="./IMG/CARDS/${name}.png" title="${name}"/>`;
}

$(document).ready(function()
{

  var game = new Game();

  $("#init").on("click", function()
  {
    Game.loadScene(game);
    console.log("Initialized");
    $("#init").addClass("hidden");
    //$(".cards").append(drawCard("Cardtemplate"));
    for (var i = 0; i < game.currentScene.player.main.length; i++)
    {
      $(".cards").append(drawCard(game.currentScene.player.main[i].name));
    }
    Game.tick(game, 2);
  });
});
