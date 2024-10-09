import Cauldron from "./cauldron.mjs";
import Ingredients from "./ingredients.mjs";
import PotionBag from "./PotionBag.mjs";
import { getData } from "./service.mjs";

const execute = async () => {
    try
    {
        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        const potionBag = new PotionBag();

        //Creamos pociones
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);
    }
    catch (error)
    {
        console.log(error.message);
    }
}

const showIngredients = (ingredients) => {
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];

        console.log(`Ingredient: ${ingredient.name}, Effects: ${ingredient.effects.join(", ")}`);
    }
};

function showPotion(potion){
    console.log(`${potion.name}`);
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:        ${potion.weight}`);
    console.log(`Time:          ${potion.time}`);
    console.log("---------------------------------");
}

function showPotions(potions) {
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];
        showPotion(potion);
    }
}

execute();