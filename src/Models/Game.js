import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import { Player } from './Player';
import { Card } from './Card';
import { CardFunc } from './CardFunc';
import { Enemy } from './Enemy';
import { Scene } from './Scene';

export class Game
{
  constructor()
  {
    this.allCards = [];
    this.allEnemies = [];
    this.allLoadouts = [];
    this.currentScene;
    Game.loadCards(this);
    Game.loadEnemies(this);
    Game.loadLoadouts(this);
  }

  static tick(scene, cardsActive) {
    for (var i = 0; i < cardsActive.length; i++)
    {
      CardFunc[cardsActive[i].function](cardsActive[i].funcvar1, scene.enemy);
    }
    for (var j = 0; j < cardsActive.length; j++)
    {
      Card.moveFromId(scene.player.hand, scene.player.discard, cardsActive[j].cardId);
    }
    $("#pl-hp").html(scene.player.health);
    $("#en-hp").html(scene.enemy.health);

    if (scene.player.hand.length === 0 && scene.player.main.length === 0) {
      Card.moveAll(scene.player.discard, scene.player.main);
    }

    Card.draw(scene.player.main, scene.player.hand, scene.player.drawRate);
    scene.turn++;
  }

  static loadCards(game)
  {
    const data = ApiHelper.get("cards");
    data.then(function(response) {
      game.allCards = response.map(function(e, i) {
          return new Card(e, i);
      })
    });
  }

  static loadEnemies(game)
  {
    const data = ApiHelper.get("enemies");
    data.then(function(response) {
      game.allEnemies = response.map(function(e, i) {
          return new Enemy(e, i);
      })
    });
  }

  static loadLoadouts(game)
  {
    const data = ApiHelper.get("loadouts");
    data.then(function(response) {
      game.allLoadouts = response.map(function(e, i) {
          return new Player(e, i);
      })
    });
  }

  static loadScene(game)
  {
    game.currentScene = new Scene(game);
  }
}
