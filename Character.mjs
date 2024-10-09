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

    //Health potion
    healthPotion(player, potions);

    //Beber magick
    magickPotion(player, potions);

    //Beber veneno
    poisonPotion(player, potions);

    //Beber pocion resistencia
    staminaPotion(player, potions);
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