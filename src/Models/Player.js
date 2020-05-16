import $ from 'jquery';
import { Card } from './Card';

export class Player {
    constructor(name) {
        this.name = name;
        this.hand = []; // ACTIVE cards
        this.main = []; // cards IN RESERVE
        this.discard = []; // spent CARDS
        this.health = 100;
        /*this.energy = 100;
        this.energyCap = 100;
        this.energyRegen = 5;*/
    }


}
