import $ from 'jquery';
import { Card } from './Card';

export class Scene
{
	constructor(game)
	{
		this.player = $.extend({}, game.allLoadouts[0]);
		this.enemy = $.extend({}, game.allEnemies[0]);
    this.turn = 0; // ODDS ARE PLAYER, EVENS ARE ENEMY;
		//this.activeUnits = ["player", "enemy"];
    Scene.populateUnits(game, this, "player");
    Scene.populateUnits(game, this, "enemy");
  }

  static populateUnits(game, scene, who)
  {
    for (var i = 0; i < scene[who].cards.length; i++)
    {
      Card.copyFromName(game.allCards, scene[who].main, scene[who].cards[i]);
    }
		Card.draw(scene[who].main, scene[who].hand, scene[who].drawRate);
	}
}
