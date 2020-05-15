import $ from 'jquery';
import { Card } from './Card';

export class Part {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.main = [];
        this.discard = [];
        this.retire = [];
        this.queue = [];
        this.health;
        this.energy;
        this.energyCap;
        this.energyRegen;
        this.basedeck = [""];
    }


}