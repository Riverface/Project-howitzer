import $ from "jquery";

export class CardFunc {
    static testFunc(amnt) {
      return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attack(scene, amnt, dealer) {
      if (dealer === scene.player) // Messy function, consider cleanup
      {
        scene.enemy.health -= amnt;
      }
      else if (dealer === scene.enemy)
      {
        scene.player.health -= amnt;
      }
    }

    static repair(scene, amnt, dealer) {
      dealer.health += amnt;
      if (dealer.health > dealer.maxHealth)
      {
        dealer.health = dealer.maxHealth;
      }
    }
}
