const PizzaShop = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order",(size, topping) => {
    console.log(`Order received with ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size)
})
pizzaShop. order("order","large", "mushroom")
pizzaShop.displayOrderNumber()

// const EventEmitter = require("node:events")
// //event class -> Event emitter
// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order Received!, Baking ${size}  with topping ${topping}`)
// });

// emitter.on("order-pizza", (size) => {
//     if(size === "large") {
//         console.log(`Serve drink`)
//     }
// })



// emitter.emit("order-pizza", "large", "mushroom")

// //Order Received!, Baking large  with topping mushroom
// // Serve drink
