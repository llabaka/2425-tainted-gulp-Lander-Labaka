export default class Potion {

    constructor (name, weight, value, time) {

        this.name    = name;
        this.weight  = weight;
        this.value   = value;
        this.time    = time;
    }

    static with(effect, weight, value) {
        const type = effect.type === 'beneficial' ? "Potion" : "Poison";
        const potion_name = `${type} of ${effect.name}`;
        const time = 10;
        return new Potion(potion_name, weight, value, time);
    }

    static failed() {
        return new FailedPotion();
    }

    static sanity() {
        return new PotionOfSanity();
    }

}

class PotionOfSanity extends Potion {
    constructor() {
        super("Potion of Sanity", 1, 1000, 50);
    }
}

class FailedPotion extends Potion {
    constructor() {
        super("Failed potion", 0, 0, 0);
    }
}