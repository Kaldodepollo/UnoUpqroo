// Comodin cambio de color
// comodin mas 4
// La carta que saco como jugador
// Decidir decir 1
const inquirer = require("inquirer");
async function selectOption(options, message = "Selecciona una opción:") {
  const result = await inquirer.prompt([
      {
        type: "list",
        name: "selectedOption",
        message,
        choices: options,
      },
    ])
    return result
}

function selectionUno(opciones, option){
  var seleccion = null;
  switch (option) {
    case "CC":
      
      break;
    case "C4":
      
      break;
    case "CHOICE":
      const cardsArray = opciones.map(card => 
        (
          {
            value: card, 
            name: `carta: ${card.number}, color: ${card.color}`
          }
          ))
      seleccion = selectOption(cardsArray, "Selecciona una carta:")
      break;
    case "UNO":
      break;
    default:
      break;
  }
  return seleccion
}

module.exports = selectionUno;