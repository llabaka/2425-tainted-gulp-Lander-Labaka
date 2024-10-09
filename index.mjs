import Cauldron from "./cauldron.mjs";
import Character from "./Character.mjs";
import Ingredients from "./ingredients.mjs";
import PotionBag from "./PotionBag.mjs";
import { getCharacterData, getData } from "./service.mjs";

const execute = async () => {
    try
    {
        const data = await getData();
        const characterData = await getCharacterData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        //Bolsas
        const pouch_red = characterData.players[0].pouch_red
        const pouch_green = characterData.players[0].pouch_red
        const pouch_yellow = characterData.players[0].pouch_red
        const pouch_aged = characterData.players[0].pouch_red

        //Creacion de pociones segun la bolsa
        const potionBag = PotionBag.create(pouch_red, cauldron);
        
        showPotions(potionBag.potions);

        const character = Character.from(characterData.players[0],potionBag.potions);

        console.log(character);
        
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