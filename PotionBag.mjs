export default class PotionBag {
    constructor(potions) {
        this.potions = potions; // Array de pociones creadas
    }

    static create(ingredients, cauldron) {
        const createdPotions = [];

        // Combinaciones de ingredientes
        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {

                const potion = cauldron.createPotion(ingredients[i], ingredients[j]);
                
                createdPotions.push(potion);
            }
        }
        
        return new PotionBag(createdPotions);
    }
}