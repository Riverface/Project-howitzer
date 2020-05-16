import $ from "jquery";

export class CardFunc {
    static testFunc(amnt) {
      return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attack(dmg, tgt) {
      tgt.health -= dmg;
    }
}
