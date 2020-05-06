import $ from 'jquery';
import { ApiHelper } from './ApiHelper';
import { Player } from './Player';
import { Card } from './Card';

export class Game
{
  constructor()
  {
    this.player = new Player("testPlayer");
    this.allCards = [];
    Game.loadCards(this);
  }

  static loadCards(game)
  {
    const data = ApiHelper.get();
    data.then(function(response) {
      game.allCards = response.map(function(e, i) {
          return new Card(e, i);
      })
    });
  }
}
