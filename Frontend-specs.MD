Main interface:

## UI
### **HUD**
```

-> HAS: Cockpit durability bar with current durability and max durability
-> HAS: Shield bar with current and max shield
-> HAS: Hand display 
-> HAS: Deck displays for Main, Discard, and Retire decks
-> Armor display (shows number of total armor counted from equipped parts)

```

### **Player MVP**

```
->HAS: Very very primitive sprites
->HAS: Durability bars for each part of the mech
->HAS: Diagram (can be a square containing very primitive art, with slots for the cards that are currently equipped.)
```
### **Card**
```
->HAS: Displays for the PV cost and Magnitude of each card.
->CAN: Be played by dragging card out of hand or double-clicking.
->CAN: Zoom in on card when user holds shift
```


Stretch stuff: 

### **Medals**

Description:
Think of medals in this game like the one that the cowardly lion got at the end of the wizard of oz.
He feels courageous because he received the medal.
Placebo effect.
Medals can affect a lot of things but minorly. Look at roguelike relics(StS, BoI, and RoR relics for references) to see how you might implement these. Each boss has a random relic on them that will drop at the end of the fight.

Specs: 

```
->HAS: Small icon that shows effect and flavor text on mouseover
->CAN: Be displayed in a line on the top of the screen
```
