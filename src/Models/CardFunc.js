import $ from "jquery";
import { StatusEffect } from "./StatusEffect";

export class CardFunc {
    static testFunc(amnt) {
      return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attack(scene, amnt, dealer, tgt) {
      tgt.health -= amnt;
    }

    static repair(scene, amnt, dealer, tgt) {
      dealer.health += amnt;
    }

    static inflictSelf(scene, status, dealer, tgt) {
      const unbaked = status.split("-");
      dealer.statuses.push(new StatusEffect(unbaked[0], unbaked[1]));
    }
}
