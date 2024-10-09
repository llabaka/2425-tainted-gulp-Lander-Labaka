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

    //Comprobar despues de beber todas las pociones
    if(checkIfGameOver(player)){
        return;
    }

}


// Funcion refactorizada
function drinkPotion(player, potion) {

    const isPoison = potion.name.includes("Poison");
    const effectValue = isPoison ? -potion.value : potion.value;
    

    switch (true) {

        //Pocion Health
        case potion.name.includes("Health"):

            console.log(`${player.fullName} drinks ${potion.name} and ${isPoison ? 'loses' : 'gains'} ${Math.abs(effectValue)} points of health.`);
            console.log("");

            player.health += effectValue;
            break;

        //Pocion Magicka
        case potion.name.includes("Magicka"):

            console.log(`${player.fullName} drinks ${potion.name} and ${isPoison ? 'loses' : 'gains'} ${Math.abs(effectValue)} points of magicka.`);
            console.log("");

            player.magick += effectValue;
            break;

        //Pocion Stamina
        case potion.name.includes("Stamina"):

            console.log(`${player.fullName} drinks ${potion.name} and ${isPoison ? 'loses' : 'gains'} ${Math.abs(effectValue)} points of stamina.`);
            
            console.log("");
        
            player.stamina += effectValue;
            break;

        //Pocion Sanity
        case potion.name.includes("Sanity"):

            console.log(`${player.fullName} drinks ${potion.name} and ${isPoison ? 'loses' : 'gains'} ${Math.abs(effectValue)} points of health, magicka, and stamina.`);
            console.log("");
            
            player.health   += effectValue;
            player.magick   += effectValue;
            player.stamina  += effectValue;

            // Mostrar los atributos después de beber la poción
            console.log(`Health:  ${player.health}`);
            console.log(`Magick:  ${player.magick}`);
            console.log(`Stamina: ${player.stamina}`);
            console.log("---------------------");

            console.log("The main objective of the game has been achieved and there is no point in continuing");
            return;

        //Pocion fallida
        case potion.name.includes("Failed"):
            console.log("Failed Potion! It has no effect!");
            console.log("");
            break;

        default:
            // Otras pociones
            console.log(`${player.fullName} drinks ${potion.name} and ${isPoison ? 'loses' : 'gains'} 1 point of health, magick & stamina`);
            console.log("");

            player.health += isPoison ? -1 : 1;
            player.magick += isPoison ? -1 : 1;
            player.stamina += isPoison ? -1 : 1;
            break;
    }
        // Mostrar los atributos después de beber la poción
        console.log(`Health:  ${player.health}`);
        console.log(`Magick:  ${player.magick}`);
        console.log(`Stamina: ${player.stamina}`);
        console.log("---------------------");
}

function checkIfGameOver(player){

    switch(true){

        case player.health <= 0:
            console.log("Joseph ha fallecido");
            return true;

        case player.magick <= 0:
            console.log("A Joseph le han drenado toda su magia y el hechizo caos del Erudito X.G termina por rematarlo");
            return true;

        case player.stamina <= 0:
            console.log("Joseph está completamente agotado y no puede moverse más");
            return true;

        default:
            return false;
    }
}