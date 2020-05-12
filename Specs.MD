## Mech
```
-> HAS: Sprites:
	-> Core
	 -> Cockpit
	   -> Hardpoint
	   -> Hardpoint
	 -> Legs
	  -> Utility
```
## Equipment
```
Stock parts:
Core:
-> HAS: 1 base magnitude
-> HAS: base 7 maximum hand size, 5 draw per turn
-> HAS: base Ammo rating of 3
Core is ONLY REPLACEABLE on a permanent basis.

Cockpit
->HAS: 50 durability
->HAS: 50 shielding
->HAS: 5 armor

Legs
->HAS: 30 durability
->HAS: 15 shielding
->HAS: 8 armor

Hardpoints:

Gatling Gun
-> HAS: 30 durability
-> HAS: 0 shielding
-> HAS: 3 armor
-> HAS: 10 base attack

-> CAN: Shift INTENT to Randomized attack
-> HAS: 3 HITS
```
Shield
```
-> HAS: 30 durability
-> HAS: 100 shielding (when intention is active), 40 shielding when active
-> HAS: 0 base attack

-> CAN: Shift INTENT to defend specific parts or whole body. Focused shields are more effective.
```
Utilities:
```
Utilities do not have Durability.
-> CAN: Boost any stat, optionally having drawbacks depending on how strong the boosted stat is.

Cycle Battery
-> HAS: an additional 2 PV per turn
-> CAN: Set INTENTION to upgrade the Magnitude of one card per hand (COST: 2 PV).
```

## Player
```
-> CAN: Play cards to swap parts and run Software (spells).
-> HAS: Hand: cards to be used on turn
-> HAS: Deck: cards that can be obtained between turn
	-> Deck Types:
		->Main
		->Discard
		->Retire
```

### Stretch goals:
```
-> CAN: Overload, using more energy than necessary to swap equipment and lose your ability to ACT upon your INTENT for the turn.
-> CAN: Shift between 3 "Distances" in order for context-sensitive equipment buffs/debuffs and context-sensitive effects for Software.
```
---
## Enemy:
```
->HAS: ID
->HAS: Name
->HAS: ATK, DEF, Shield, Durability per-part
->CAN: set INTENT by making primitive decisions based on stats and RNG
->HAS: 1-4 usable cards.
```

### Stretch goals:

ALL Cards
```
-> HAS: Id
-> HAS: Name
-> HAS: COST: PV Cost to play from hand.
-> HAS: Card Art, Effect text, and sometimes Flavor text
-> HAS: Type and Magnitude
```

Part:
->HAS: HP, CAP, ATK, Durability
->HAS: PV Cost
->CAN: Open up, close off, and add properties to INTENTs.
->MAGNITUDE:

INTENTs - For either arm, you can 'aim' at specific parts of the enemy.
At the end of each turn, each character acts upon their INTENTs.
An INTENT can have 4(5 if we reach the stretch) possible components.


Examples: If you face your shield (in this instance it is in the Left hardpoint) towards a particular enemy, damage from that enemy will be decreased by 10% per Magnitude of that shield.

MVP: 4 intents
->Attack
->Defend
->Hinder
->Enhance

Stretch Intents:
->Move further away from or closer to the enemy.


Hinderances -
* Corrosion: Equipment is "Poisoned"
* Mollification: Equipment's material is cheapened, attacks do more to affected equipment
* Malfunction: One piece of Equipment is unusable
* Concussion: Entire turn is missed
* Flashed: Intent is chosen at random this turn

Enhancements -
* Nano-implantation: Nanobots repair the equip
* Tempering: Defense up
* Target Tracking: Temporary percentage chance for critical hits
* Stimpack: Attack twice, lose 5% health
* Patriotism: Immunity to hinderances
* Fury: INTENT is forced to attack when capable, +50% damage


-> CAN: Move cards between decks, based on ID
-> CAN: Find card based on ID
-> CAN: Find card based on Position in Array
-> CAN: Damage Shields, wear out Durability on Parts, change INTENTIONS temporarily or permanently,
-> CAN: Affect all stats, whether on a per-turn basis or a single time.


Software:
-> HAS: Type and Magnitude
-> CAN: Move cards between decks, based on ID and position in deck (Going either direction through any pile, like first second third forward or backward)
-> CAN:
Enemies, depending on what kind of enemy they are, CAN have 1-4 cards.
For the MVP, the initial enemy will have 2 of them and an otherwise stock frame.
-> CAN: Multiply and/or divide stats for the duration of the fight.

Scene MVP
-> HAS: Player
-> HAS: Enemy or Enemies.

Scene Stretch
-> HAS: Environmental hazards


Combat loop:
Player plays cards to bring out parts, sets intent per-part, then ends turn.
Intents play out one by one, starting with defenses, then utilities, then attacks in that order until one or the other is dead. Generally this game will be organized in duels.
At the end of combat the player may choose one part or software to take from the enemy's mech.
