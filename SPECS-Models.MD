### HOW TO ADD CARDS PROPERLY
* _Open up `DBs/cards.json`_
* _Observe the pattern and copy it._
* _You may add ANY VARIABLE YOU WANT._
* _Health? Damage? Size? Sprite? Weight? Cost?_
* _Whatever! Just add it! You can use it~!_

### MODELS
## ApiHelper
# ApiHelper.get()
_Returns the big json of `DBs/cards.json`_

## Card
# new Card(obj OBJECT, int ID)
_Creates a new `Card`, this method should not be used when possible_
# Card.findFromId(array DECK, int ID)
_Returns `Card` from `DECK` based on `ID`_
_`Card.findFromId(player.hand, 2)`_
# Card.findFromName(array DECK, string NAME)
_Returns `Card` from `DECK` based on `NAME`_
_`Card.findFromName(player.hand, "smite")`_
# Card.findFromRandom(array DECK)
_Returns a random `Card` from `DECK`_
_`Card.findFromRandom(player.hand)`_
# Card.findIndexFromId(array DECK, int ID)
_Returns the index of a `Card` in `DECK` from `ID`_
_`Card.findIndexFromId(player.hand, "smite")`_
# Card.moveFromId(array INITIALDECK, array TARGETDECK, int ID)
_Moves a `Card` from `INITIALDECK` to `TARGETDECK` from `ID`_
_Returns nothing_
_`Card.moveFromId(player.hand, player.discard, 3)`_
# Card.copyFromId(array INITIALDECK, array TARGETDECK, int ID)
_Makes a copy of a `Card` from `INITIALDECK` to `TARGETDECK` from `ID`_
_Returns nothing_
_`Card.copyFromId(game.allCards, player.main, 2)`_
# Card.shuffleDeck(array DECK)
_Shuffles the `Cards` in `DECK`, randomizes each `Card` position in `DECK`_
_Returns nothing_
_`Card.shuffleDeck(player.hand)`_

## CardFunc
_This is where you put in functions to be used from cards._
_Consult `spec/test-spec.js` for calling functions based on strings_
_`CardFunc[thisCard.function](thisCard.funcvar1)`_
_For the previous example, it assumes `funcvar1` is stated in `cards.json`_

## Game
# new Game()
_Creates a new Game object, try to only make 1 of these, and use it as a "master object"_
# Game.loadCards(obj GAME)
_Loads all the cards from `ApiHelper.get()` and puts it in `GAME.allCards`, this method should not be used when possible_
