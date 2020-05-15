import { ApiHelper } from './ApiHelper';
import { Player } from './Player';
import { Card } from './Card';
import { Enemy } from './Enemy';
export class Game {
    constructor() {
            this.player = new Player("testPlayer");
            this.enemies = [new Enemy("goblin", 50, 5, 5)];
            this.allCards = [];
            Game.loadCards(this);
        }
        // Loads every card
    static loadCards(game) {
        const data = ApiHelper.get();
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



    }
}