import $ from 'jquery';
import { Game } from './Models/Game';
import { Card } from './Models/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Sidebar } from './Models/Sidebar';

function drawCard(card, enemy)
{
  var newCard = $("#templateCard").clone();
  newCard.attr("id",`card-${card.name}`);
	newCard.attr("title",card.name);
  newCard.find("img").attr("src",`./IMG/CARDS/${card.name}.png`);
  newCard.find(".cardName").text(card.name);
  newCard.find(".cardFunc").text(card.function.toUpperCase());
  newCard.find(".cardVar1").text(card.funcvar1);
  newCard.find(".cardCost").text(card.cost);

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

  $(".playerName").html(game.currentScene.player.name);
  $(".pl-hp").html(game.currentScene.player.health);
  $(".pl-en").html(game.currentScene.player.energy);


  $(".enemyName").html(game.currentScene.enemy.name);
  $(".en-hp").html(game.currentScene.enemy.health);
  $(".en-en").html(game.currentScene.enemy.energy);
}

$(document).ready(function()
{

  var game = new Game();

  $("#init").on("click", function()
  {
    Game.loadScene(game);
    $("#init").addClass("hidden");
    $("#wholeGame").removeClass("hidden");
    Sidebar.log(`Game Initialized`);
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
