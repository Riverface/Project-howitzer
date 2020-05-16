import $ from 'jquery';
import { Card } from './Card';

export class Scene
{
	constructor(game)
	{
		this.player = $.extend({}, game.allLoadouts[0]);
		this.enemy = $.extend({}, game.allEnemies[0]);
    this.turn = 0; // ODDS ARE PLAYER, EVENS ARE ENEMY;
    Scene.populateUnits(game, this)
  }

  static populateUnits(game, scene)
  {
    for (var i = 0; i < scene.player.cards.length; i++)
    {
      Card.copyFromName(game.allCards, scene.player.hand, scene.player.cards[i]);
    }
  }
}
