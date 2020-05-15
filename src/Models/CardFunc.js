import $ from "jquery";

export class CardFunc {
    static testFunc(amnt) {
        return amnt;
    }

    // CAN BE CALLED VIA
    // CardFunc[card.function](card.funcvar1, targetobject);
    static attackFuncExample(dmg, tgt) {
            tgt.health -= dmg;
        }
        //Deal attack damage to 
    static AttackGeneric(dmg, trgt, sprt) {
    
    }
}