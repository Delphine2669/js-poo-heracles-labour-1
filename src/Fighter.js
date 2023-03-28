/* Fighter class definition */

const max_Life = 100

class Fighter {
    constructor(name, strength, dexterity, life = max_Life, fight) {
        this.name = name
        this.strength = strength
        this.dexterity = dexterity
        // this.max_Life = max_Life
        this.fight = fight
        function fight(defender) {
            const dammagePoint = Math.floor(Math.random() * this.strength + 1);
            const defenderDodge = Math.floor((dammagePoint - this.dexterity) > 0);
            const lifeUpdate = (dammagePoint - defenderDodge);
        }
    }
}


module.exports = Fighter
