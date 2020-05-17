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
      Card.copyFromName(game.allCards, scene.player.main, scene.player.cards[i]);
    }
		Card.draw(scene.player.main, scene.player.hand, scene.player.drawRate);

    for (var j = 0; j < scene.enemy.cards.length; j++)
    {
      Card.copyFromName(game.allCards, scene.enemy.main, scene.enemy.cards[j]);
    }
		Card.draw(scene.enemy.main, scene.enemy.hand, scene.enemy.drawRate);
  }
}
