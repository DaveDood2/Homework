let pizzaToppings = ["None", "Pizza", "With", "Left", "Beef"];

function greetCustomer() {
  console.log("Welcome to Lucy's None Pizza With Left Beef!");
  let toppingsList = "Our toppings are ";
  toppingsList += toppingsToString(pizzaToppings);
  console.log(toppingsList);
}

function toppingsToString(toppings) {
  let toppingsString = "";
  for (let i = 0; i < toppings.length; i++) {
    if (i !== toppings.length - 1) {
      toppingsString += toppings[i] + ", ";
    } else {
      toppingsString += "and " + toppings[i] + ".";
    }
  }
  return toppingsString;
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppingsToString(
      toppings
    )} ... coming up!`
  );
  return [size, crust, toppings];
}

function preparePizza(size, crust, ...toppings) {
  console.log("...Hucking chunks of oblong beef onto a pizza crust...");
  let pizza = {
    size: size,
    crust: crust,
    toppings: toppings[0]
  };
  return pizza;
}

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } crust pizza with ${toppingsToString(pizza.toppings)} ... Enjoy!`
  );
  return pizza;
}

greetCustomer();
let pizzaOrder = getPizzaOrder("none", "left", "beef", "beef", "beef", "beef");

let pizza = preparePizza(pizzaOrder[0], pizzaOrder[1], pizzaOrder[2]);

servePizza(pizza);
