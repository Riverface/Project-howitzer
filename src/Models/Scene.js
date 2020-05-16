import $ from 'jquery';
import { Card } from './Card';

export class Scene
{
	constructor(game)
	{
		this.player = $.extend({}, game.allLoadouts[0]);
		this.enemy = $.extend({}, game.allEnemies[0]);
    Scene.populateUnits(game, this)
  }

  static populateUnits(game, scene)
  {
    for (var i = 0; i < scene.player.cards.length; i++)
    {
      Card.copyFromName(game.allCards, scene.player.main, scene.player.cards[i]);
    }
    console.log(scene.player.main);
  }
}
