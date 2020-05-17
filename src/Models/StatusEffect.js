import $ from 'jquery';

export class StatusEffect
{
	constructor(name, dur)
	{
		this.name = name;
		this.duration = dur;
  }

  // shield : Halves direct damage taken (see CardFunc.attack)
  // repMode : Doubles direct repair (see CardFunc.repair)
  // weaken : Halves direct damage dealt (see CardFunc.attack)
}
