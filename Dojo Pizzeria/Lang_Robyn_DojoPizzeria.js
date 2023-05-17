function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(pizza1)

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

let pizza3Robyns = pizzaOven("hand tossed", "marinara", ["mozzarella", "parmesan"], ["black olives", "mushrooms"])
console.log(pizza3Robyns)

let pizza4 = pizzaOven("thin crust", "none", ["cheddar", "parmesan", "mozzarella"], ["green olives", "pineapples", "peppers"])
console.log(pizza4)

function randomPizza() {
    const crustType = [
        "regular",
        "hand tossed",
        "deep dish",
        "thin crust",
        "stuffed crust",
        "gluten free"
    ]

    const sauceType = [
        "none",
        "marinara",
        "alfredo",
        "traditional"
    ]

    const cheeses = [
        "mozzarella",
        "feta",
        "parmesan",
        "cheddar"
    ]

    const toppings = [
        "pepperoni",
        "mushrooms",
        "onions",
        "bell peppers",
        "olives",
        "tomatoes",
        "bacon",
        "sausage",
        "chicken",
        "spinach",
        "pineapple",
        "jalapenos",
        "anchovies"
    ]

    let randomCrust = crustType[Math.floor(Math.random() * crustType.length)];
    let randomSauce = sauceType[Math.floor(Math.random() * sauceType.length)];
    let randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    let randomToppings = toppings[Math.floor(Math.random() * toppings.length)];

    console.log({
        crustType: randomCrust,
        sauceType: randomSauce,
        cheeses: randomCheese,
        toppings: randomToppings,
    })

    return {
        crustType: randomCrust,
        sauceType: randomSauce,
        cheeses: randomCheese,
        toppings: randomToppings,
    }
}

randomPizza();