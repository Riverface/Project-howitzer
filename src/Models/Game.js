import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import { Player } from './Player';
import { Card } from './Card';
import { CardFunc } from './CardFunc';
import { Enemy } from './Enemy';
import { Scene } from './Scene';
import { Sidebar } from './Sidebar';

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
    Sidebar.log(`Tick!`);
    var tgt = "enemy";
    if (who === "enemy") {
      tgt = "player"
    }
    const totalCost = cardsActive.reduce(function(con, e) {
      return con+e.cost
    }, 0);
    if (scene[who].energy >= totalCost)
    {
      for (var i = 0; i < cardsActive.length; i++)
      {
        Sidebar.log(`${who}: used ${cardsActive[i].name}! ${cardsActive[i].function}!`);
        CardFunc[cardsActive[i].function](scene, cardsActive[i].funcvar1, scene[who], scene[tgt]);
        scene[who].energy -= cardsActive[i].cost;
      }
      for (var j = 0; j < cardsActive.length; j++)
      {
        Card.moveFromId(scene[who].hand, scene[who].discard, cardsActive[j].cardId);
      }
    } else {
      Sidebar.log(`${who}: Overloaded!`);
    }
    if (scene[who].hand.length === 0 && scene[who].main.length === 0) {
      Card.moveAll(scene[who].discard, scene[who].main);
      Sidebar.log(`${who}: Cards moved from Discard to Main.`);
    }

    Card.draw(scene[who].main, scene[who].hand, scene[who].drawRate);
    Sidebar.log(`${who}: Drew.`);

    scene[who].energy += scene[who].energyRegen;
    if (scene[who].energy > scene[who].maxEnergy) {
      scene[who].energy = scene[who].maxEnergy;
    }
    if (scene[who].health > scene[who].maxHealth) {
      scene[who].health = scene[who].maxHealth;
    }

    scene[who].statuses = scene[who].statuses.map( function(e) {
      var eAltered = e;
      eAltered.duration--;
      return eAltered;
    });
    scene[who].statuses = scene[who].statuses.filter( e => e.duration > 0);

    if (scene.player.health <= 0) {
      alert(`${scene.player.name} is dead. Not big surprise`);
    } else if (scene.enemy.health <= 0) {
      alert(`${scene.enemy.name} is dead. gg`);
    }

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
