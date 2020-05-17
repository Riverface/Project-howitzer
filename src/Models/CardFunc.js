import $ from "jquery";
import { StatusEffect } from "./StatusEffect";

export class CardFunc {
    static testFunc(amnt) {
      return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attack(scene, amnt, dealer, tgt) {
      var netStatusesTgt = tgt.statuses.map(function(e) {
        return e.name;
      })
      if (netStatusesTgt.includes("shield")) {
        amnt = Math.floor(amnt/2);
      }

      var netStatusesDealer = dealer.statuses.map(function(e) {
        return e.name;
      })
      if (netStatusesDealer.includes("weaken")) {
        amnt = Math.floor(amnt/2);
      }

      tgt.health -= amnt;
    }

    static repair(scene, amnt, dealer, tgt) {
      var netStatusesDealer = dealer.statuses.map(function(e) {
        return e.name;
      })
      if (netStatusesDealer.includes("repMode")) {
        amnt = Math.floor(amnt*2);
      }
      dealer.health += amnt;
    }

    static inflictSelf(scene, status, dealer, tgt) {
      const unbaked = status.split("-");
      dealer.statuses.push(new StatusEffect(unbaked[0], unbaked[1]));
    }

    static inflictTgt(scene, status, dealer, tgt) {
      const unbaked = status.split("-");
      tgt.statuses.push(new StatusEffect(unbaked[0], unbaked[1]));
    }

    static purgeAll(scene, unused, dealer, tgt) {
      dealer.statuses = [];
      tgt.statuses = [];
    }
}
