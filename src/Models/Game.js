import { ApiHelper } from './ApiHelper';
import { Player } from './Player';
import { Card } from './Card';
import { Enemy } from './Enemy';


export class Game
{
  constructor()
  {
    this.player = new Player("testPlayer");
    this.allCards = [];
    this.allEnemies = [];
    Game.loadCards(this);
    Game.loadEnemies(this);
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

    static StartTurn() {

    }
    static Queue() {
        this.player.queue.forEach((queuecard) => {
            queuecard.function();
        });;
    }
    static endTurn() {
        //Loop that iterates through all cards in queue, animation will play.


  static loadEnemies(game)
  {
    const data = ApiHelper.get("enemies");
    data.then(function(response) {
      game.allEnemies = response.map(function(e, i) {
          return new Enemy(e, i);
      })
    });
  }

}
    }
}
