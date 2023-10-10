const rl = required ("readline-sync");

//juego UNO
var deck = [];
var colors = ["Yellow", "Blue", "Green", "Red"];
var types = ["Comun", "Especial", "Comodin"];

var card = {
    color: null, //amarillo, azul, verde, rojo
    number: null, // 0-9
    type: null // comunes, espciales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {

    for (var cNumber = 0; cNumber < 10; cNumber++) {
        deck.push({color: colors[cColor], number: cNumber, typ: "comun"});
    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {
        deck.push({color: colors[cColor], number: cNumber1, typ: "comun"});
    }

    deck.push({color: colors[cColor], number: "+2", typ: "comun"});
    deck.push({color: colors[cColor], number: "+2", typ: "comun"});
    deck.push({color: colors[cColor], number: "B", typ: "comun"});
    deck.push({color: colors[cColor], number: "B", typ: "comun"});
    deck.push({color: colors[cColor], number: "R", typ: "comun"});
    deck.push({color: colors[cColor], number: "R", typ: "comun"});
}

deck.push({color: nulll, number: "+4", typ: "Comodin"});
deck.push({color: nulll, number: "+4", typ: "Comodin"});
deck.push({color: nulll, number: "+4", typ: "Comodin"});
deck.push({color: nulll, number: "+4", typ: "Comodin"});
deck.push({color: nulll, number: "cc", typ: "Comodin"});
deck.push({color: nulll, number: "cc", typ: "Comodin"});
deck.push({color: nulll, number: "cc", typ: "Comodin"});
deck.push({color: nulll, number: "cc", typ: "Comodin"});


//console.log(deck);
//init sirve para inicializar un proyyecto de node
const player = rl.question("Cuantos jugadores seran?", {})
console.log(players)