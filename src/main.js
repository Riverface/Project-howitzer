import $ from 'jquery';
import { Game } from './Models/Game';
import { Card } from './Models/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function drawCard(name)
{
  var newCard = $("#templateCard").clone();
  newCard.attr("id",`card-${name}`);
	newCard.attr("title",name);
  newCard.find("img").attr("src",`./IMG/CARDS/${name}.png`);

	newCard.on("click", function() {
    $(this).toggleClass("active");
  });

  return newCard;
}

$(document).ready(function()
{

  var game = new Game();

  $("#init").on("click", function()
  {
    console.log($(this).attr("id"));
    Game.loadScene(game);
    console.log("Initialized");
    $("#init").addClass("hidden");
    $("#wholeGame").removeClass("hidden");
    for (var i = 0; i < game.currentScene.player.main.length; i++)
    {
      $(".cards").append(drawCard(game.currentScene.player.main[i].name));
    }
    //Game.tick(game, [2]);
  });

  $("#turn").on("click", function()
  {
    var cardsDeployed = []
    $(".active").each(function()
    {
      Card.copyFromName(game.allCards, cardsDeployed, $(this).attr("title"));
      $(this).removeClass("active");
    });
    console.log(cardsDeployed);
    Game.tick(game.currentScene, cardsDeployed);
  })
});
