import Cauldron from "./cauldron.mjs";
import Ingredients from "./ingredients.mjs";
import Potion from "./potion.mjs";
import PotionBag from "./PotionBag.mjs";
import { getAllData, getData } from "./service.mjs";

const execute = async () => {
    try
    {
        const data = await getData();
        const allData = await getAllData();

        console.log(allData);
        

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        const potionBag = PotionBag.create(ingredients, cauldron);
        
        showPotions(potionBag.potions);
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