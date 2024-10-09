export default class Character {

    constructor (fullName, health, magick, stamina, potions) {

        this.fullName   = fullName;
        this.health     = health;
        this.magick     = magick;
        this.stamina    = stamina;
        this.potions    = potions;
    }

    static from(playerData, potions) {
        const {name, class: characterClass, health, magick, stamina } = playerData;

        const fullName = `${name} the ${characterClass}`;

        return new Character(fullName, health, magick, stamina, potions);
    }
    
}

export function drinkEmAll(player, potions) {

    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];
        
        //Beber la pocion
        drinkPotion(player, potion)
    }

}


// Funcion refactorizada
function drinkPotion(player, potion) {

    const isPoison = potion.name.includes("Poison");
    const effectValue = isPoison ? -potion.value : potion.value;
    

    switch (true) {

        //Pocion Health
        case potion.name.includes("Health"):
            player.health += effectValue;
            break;

        //Pocion Magicka
        case potion.name.includes("Magicka"):
            player.magick += effectValue;
            break;

        //Pocion Stamina
        case potion.name.includes("Stamina"):
            player.magick += effectValue;
            break;

        //Pocion Sanity
        case potion.name.includes("Sanity"):
            player.health += effectValue;
            player.magick += effectValue;
            player.stamina += effectValue;
            break;

        default:
            // Otras pociones
            player.health += isPoison ? -1 : 1;
            player.magick += isPoison ? -1 : 1;
            player.stamina += isPoison ? -1 : 1;
            break;

    }

}
//Funcion de beber pocion de vida
function healthPotion(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Health")){
            
            player.health += potion.value;
        }
    }
}

//Funcion de beber pocion de magicka
function magickPotion(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Magicka")){
            
            player.magick += potion.value;
        }
    }
}

//Funcion de beber pocion de resistencia
function staminaPotion(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Stamina")){
            
            player.stamina += potion.value;
        }
    }
}

//Funcion de beber veneno
function poisonPotion(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Poison")){
            
            player.health -= potion.value;
        }
    }
}

//Funcion de beber resto de pociones
function otherPotions(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (!potion.name.includes("Health") || !potion.name.includes("Magicka") || !potion.name.includes("Stamina")){
            
            player.health   += 1;
            player.magick   += 1;
            player.stamina  += 1;
        }
    }
}

//Funcion de beber veneno
function potionOfSanity(player, potions){
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Sanity")){
            
            player.health   += potion.value;
            player.magick   += potion.value;
            player.stamina  += potion.value;
        }
    }
}