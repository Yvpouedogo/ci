import add from "../add";
import fs from "fs";
import {set1pizzas} from "../../ss/ss"

describe("add tests", () => {
  test("should add two numbers", () => {
    expect(add(1, 1)).toEqual(2);
  });

  test("should add two negatives numbers", () => {
    expect(add(-1, -1)).toEqual(-2);
  });
});

describe("pizza tests" , () => {
  test(" should export pizzas" , () => {
    fs.writeFileSync('src/storage/pizza.test.json', "[]");
    const pizza ={"name": "peperonni", "image": "https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg"}
    const result = set1pizzas(pizza, 'src/storage/pizza.test.json');
    expect(result[0].name).toEqual("peperonni")
    })});
