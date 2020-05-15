import $ from 'jquery';
import { Card } from './Card';

export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.main = [];
        this.discard = [];
        this.retire = [];
        this.queue = [];
        this.health = 100;
        this.energy = 100;
        this.energyCap = 100;
        this.energyRegen = 5;
        this.basedeck = [""];
    }

}