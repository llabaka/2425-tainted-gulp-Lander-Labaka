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

    //Beber veneno
    drinkPoison(player, potions);
}

//Funcion de beber veneno
function drinkPoison(player, potions){

    console.log("JOSEPH BEFORE DRINKING: " + player.health);
    
    for (let i = 0; i < potions.length; i++) {
        const potion = potions[i];

        if (potion.name.includes("Poison")){
            
            player.health -= potion.value;
        }
    }

    console.log("JOSEPH AFTER DRINKING: " + player.health);

}