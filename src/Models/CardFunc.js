import $ from "jquery";

export class CardFunc {
    static testFunc(amnt) {
      return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attack(scene, dmg, dealer) {
      if (dealer === scene.player) // Messy function, consider cleanup
      {
        scene.enemy.health -= dmg;
      }
      else if (dealer === scene.enemy)
      {
        scene.player.health -= dmg;
      }
    }
}
