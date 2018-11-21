import fs from "fs";

export function readPizzas() {
    const pizzas = JSON.parse(fs.readFileSync('src/storage/pizza.json'));
    return pizzas;
}

export function setpizzas() {
    const pizzas = [
        { "name": "peperonni", "image": "https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg" },
        { "name": "4fromages", "image": "https://le80.fr/wp-content/uploads/2017/05/pizza-4-fromages.jpg" }
    ];
    fs.writeFileSync('src/storage/pizza.json', JSON.stringify(pizzas));
    return pizzas;
}

export function set1pizzas(pizza , path='src/storage/pizza.json') {
    const pizzas = readPizzas()
    pizzas.push(pizza)
    fs.writeFileSync(path, JSON.stringify(pizzas));
    return pizzas;
}
