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

function refresh(game)
{
  $(".playerCards").empty();
  for (var i = 0; i < game.currentScene.player.hand.length; i++)
  {
    $(".playerCards").append(drawCard(game.currentScene.player.hand[i].name));
  }
}

$(document).ready(function()
{

  var game = new Game();

  $("#init").on("click", function()
  {
    Game.loadScene(game);
    $("#init").addClass("hidden");
    $("#wholeGame").removeClass("hidden");
    refresh(game);
  });

  $("#turn").on("click", function()
  {
    var cardsDeployed = []
    $(".active").each(function()
    {
      Card.copyFromName(game.allCards, cardsDeployed, $(this).attr("title"));
      $(this).removeClass("active");
    });
    Game.tick(game.currentScene, cardsDeployed);
    refresh(game);
  })
});
