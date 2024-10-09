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

        // Si alguna condicion es verdad, se acabara el juego. Con cualquier pocion.
        if (checkIfGameOver(player)){
            return;
        }

        //Beber la pocion
        drinkPotion(player, potion);
    }

}


// Funcion refactorizada
function drinkPotion(player, potion) {

    const isPoison = potion.name.includes("Poison");
    const effectValue = isPoison ? -potion.value : potion.value;
    

    switch (true) {

        //Pocion Health
        case potion.name.includes("Health"):
            console.log("Joseph health: " +player.health);
            
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

        //Pocion fallida
        case potion.name.includes("Failed"):
            console.log("Failed Potion, no effect!");
            break;

        default:
            // Otras pociones
            player.health += isPoison ? -1 : 1;
            player.magick += isPoison ? -1 : 1;
            player.stamina += isPoison ? -1 : 1;
            break;
    }
}

function checkIfGameOver(player){

    switch(true){

        case player.health <= 0:
            console.log("Joseph ha fallecido");
            return true;

        case player.magick <= 0:
            console.log("A Joseph le han drenado toda su magia y el hechizo cas del Erudito X.G termina por rematarlo");
            return true;

        case player.stamina <= 0:
            console.log("Joseph está completamente agotado y no puede moverse más");
            return true;
    }
}