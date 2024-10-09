export default class PotionBag {

    constructor (potions){
        this.potions = potions;
    }

    create(ingredients, cauldron){
        
        const createdPotions = [];
        const uniqueIngredients = [];

        // Almacenar los ingredientes unicos
        for (let i = 0; i < ingredients.length; i++) {
            const ingredient = ingredients[i];

            let isUnique = true;

            for (let j = 0; j < uniqueIngredients.length; j++) {
                if (uniqueIngredients[j].name = ingredient.name){
                    isUnique = false;
                    break;
                }
                
            }

            if (isUnique) {
                uniqueIngredients.push(ingredient);
            }
        }

        // Creacion de las pociones (Una pocion por cada pareja)
        for (let i = 0; i < uniqueIngredients.length; i++) {
            for (let j = i + 1; j < uniqueIngredients.length; j++) {
                const ingredient1 = uniqueIngredients[i];
                const ingredient2 = uniqueIngredients[j];

                try {
                    const potion = cauldron.createPotion(ingredient1, ingredient2);
                    createdPotions.push(potion);
                }
                catch (error) {
                    console.log(error);
                }

            }
        }
    }
}