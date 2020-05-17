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

  static tick(scene, cardsActive, who) {
    for (var i = 0; i < cardsActive.length; i++)
    {
      CardFunc[cardsActive[i].function](scene, cardsActive[i].funcvar1, scene[who]);
    }
    for (var j = 0; j < cardsActive.length; j++)
    {
      Card.moveFromId(scene[who].hand, scene[who].discard, cardsActive[j].cardId);
    }
    if (scene[who].hand.length === 0 && scene[who].main.length === 0) {
      Card.moveAll(scene[who].discard, scene[who].main);
    }

    console.log("Enemy?", scene["enemy"].name);
    Card.draw(scene[who].main, scene[who].hand, scene[who].drawRate);

    scene.turn++;

    if (scene.turn%2===0) {
      Game.tick(scene, [Card.findFromRandom(scene.enemy.hand)], "enemy")
    }
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
