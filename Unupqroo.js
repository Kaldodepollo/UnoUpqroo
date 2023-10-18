const rl = require ("readline-sync");
let MazoRevuelto = require('./modules/revolvermazo')
// juego UNO
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"];
var type = ["Comun", "Especial", "Comodin"];

var card = {
    color: null, // color amarillo, azul, verde y rojo
    number: null, // 0 -9
    type: null, // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {
    // console.log("color:", colors[cColor]);
    for (var cNumber = 0; cNumber < 10; cNumber++){   
        deck.push({color: colors[cColor], number: cNumber, type:"comun"});
    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++){     
        deck.push({color: colors[cColor], number: cNumber1, type:"comun"});
    }

    deck.push({color: colors[cColor], number: "+2", type:"Especial"});
    deck.push({color: colors[cColor], number: "+2", type:"Especial"});
    deck.push({color: colors[cColor], number: "B", type:"Especial"});
    deck.push({color: colors[cColor], number: "B", type:"Especial"});
    deck.push({color: colors[cColor], number: "R", type:"Especial"});
    deck.push({color: colors[cColor], number: "R", type:"Especial"});
}

deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "+4", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});
deck.push({color: null, number: "CC", type:"Comodin"});

//console.log(deck);

const players = rl.question("Cuantos jugadores seran?", {})
const totalCards = players * 7;
//dependecias codigo que depende de otro codigo
//Reartir 7 cartas por jugador
//Recorro el total de tarjetas (total de tarjetas = tarjetas/7 x jugador)
// un arreglo por cada x jugador
var cardsPlayers = {};
for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++)  {
        if (!cardsPlayers["player_"+cPlayers]) {
            cardsPlayers["player_"+cPlayers] = [];
        }
        cardsPlayers["player_"+cPlayers].push(deck.shift());
        
    }
}

var trash = [];

trash.push(deck.shift())

//console.log(trash); 

//function cardValidation(card) {
    //console.log(card.color)
    //en ves de compara número es compara colores y de que trash tiene que ser el número(color) a comparar
    //card.color: Esto obtiene el color de la carta que se pasa a la función cardValidation
    //trash[0].color: Esto obtiene el color de la primera carta en la pila de descarte (trash)
    //if (card.color == trash[0].color): Esto compara los dos colores. Si son iguales, 
    //entonces se ejecuta el código dentro del bloque if.
    //if (card.color == trash[0].color){
        //console.log("es igual")
    //} else {console.log("no es igual")}
//}

//cardValidation({color: "Red",number:2,type:"comun"});

//var trash = [];

//trash.push(deck.shift())

//console.log(trash); 

//function cardValidation(card) {
    //console.log(card.color)
    //if (card.color == "trash" ){
        //console.log("es igual")
    //} else {console.log("no es igual")}
//}

//cardValidation({color: "verde",number:"trash",type:"comun"});
//Este es otro*************************************************************
//function cardValidation(card){
    //var cardTrash = trash[trash.length - 1];
    //if(cardTrash.color == card.color || cardTrash.number == card.number){
        //&&ambas deben ser verdaderas para que se cumplan 
        //||si alguna es verdadera se debe cumplir
        //console.log("es igual");

    //}else{
        //console.log("no es igual")
    //}
//}
//cardValidation({color: "yellow", number: 2, type: "comun"});

//Esto compara los os numero y color
function cardValidation(card) {
    console.log(card.number)
    if (card.number == trash[trash.length-1].number || card.color == [trash.length-1].color){
        console.log("es igual")
    } else {console.log("no es igual")}
}

for(const player in  cardsPlayers){
    console.log(cardsPlayers[player])
    //paso 0 primer player ponga una carta
    //paso 1 ver mis cartas
    //paso 2 elejir carta
    //paso 3 validar carta
    //paso 4 poner carta (de mano jugador a trash)


    
    MazoRevuelto(deck);

console.log("Mazo revuelto:");
console.log(deck);
}