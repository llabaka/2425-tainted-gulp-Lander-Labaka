import Cauldron from "./cauldron.mjs";
import Character, { drinkEmAll } from "./Character.mjs";
import Ingredients from "./ingredients.mjs";
import PotionBag from "./PotionBag.mjs";
import { getCharacterData, getData } from "./service.mjs";

const execute = async () => {
    try
    {
        const data = await getData();
        const characterData = await getCharacterData();

        const josephData = characterData.players[0];

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        //Bolsas
        const pouch_red = josephData.pouch_red;
        const pouch_green = josephData.pouch_green;
        const pouch_yellow = josephData.pouch_yellow;
        const pouch_aged = josephData.pouch_aged;

        //Creacion de pociones segun la bolsa
        const potionBag = PotionBag.create(pouch_green, cauldron);
        
        showPotions(potionBag.potions);

        const joseph = Character.from(josephData, potionBag.potions);

        showCharacter(joseph)

        //Joseph se bebera las pociones
        drinkEmAll(joseph, potionBag.potions);
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

function showCharacter(player) {
    console.log(player.fullName);
    console.log("---------------------");
    console.log("Health:        " + player.health);
    console.log("");
    console.log("Magick:        " + player.magick);
    console.log("");
    console.log("Stamina:       " + player.stamina);
    console.log("");
    
    for (let i = 0; i < player.potions.length; i++) {
        const potion = player.potions[i];
        
        console.log("Potion " + (i + 1) + ": " + potion.name);
        console.log("");
        
    }
    console.log("---------------------");
    
}

execute();