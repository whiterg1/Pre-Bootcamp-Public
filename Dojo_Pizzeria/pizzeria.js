function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = "This Pizza's crust type is: " + crustType;
    pizza.sauceType = "This Pizza's suace type is: " + sauceType;
    pizza.cheeses = "This Pizza's cheeses are: " + cheeses;
    pizza.toppings = "This Pizza's Toppings are: " + toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional",["mozarella"], ["pepperoni","sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozarella", "feta"], ["mushrooms", "olives","onions"]);
var pizza3 = pizzaOven("thin crust","alfredo",["mozarella"], ["pepperoni", "sausage", "olives", "mushrooms"]);
var pizza4 = pizzaOven("hand tossed","traditional",["mozarella"], ["pepperoni", "ham", "pineapple"]);

console.log(pizza1); //this is just an exmaple using pizza4, but it will work with any of the other defined pizza variables//


