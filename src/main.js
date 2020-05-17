import $ from 'jquery';
import { Game } from './Models/Game';
import { Card } from './Models/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function drawCard(card, enemy)
{
  var newCard = $("#templateCard").clone();
  newCard.attr("id",`card-${card.name}`);
	newCard.attr("title",card.name);
  newCard.find("img").attr("src",`./IMG/CARDS/${card.name}.png`);
  newCard.find(".cardName").text(card.name);
  newCard.find(".cardFunc").text(card.function.toUpperCase());
  newCard.find(".cardVar1").text(card.funcvar1);

  if (enemy !== true)
  {
  	newCard.on("click", function() {
      $(this).toggleClass("active");
    });
  }
  return newCard;
}

function refresh(game)
{
  $(".playerCards").empty();
  for (var i = 0; i < game.currentScene.player.hand.length; i++)
  {
    $(".playerCards").append(drawCard(game.currentScene.player.hand[i], false));
  }

  $(".enemyCards").empty();
  for (var j = 0; j < game.currentScene.enemy.hand.length; j++)
  {
    $(".enemyCards").append(drawCard(game.currentScene.enemy.hand[j], true));
  }

  $("#pl-hp").html(game.currentScene.player.health);
  $("#en-hp").html(game.currentScene.enemy.health);
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
    Game.tick(game.currentScene, cardsDeployed, "player");
    refresh(game);
  })
});
