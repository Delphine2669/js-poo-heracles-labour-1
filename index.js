// First Labour : Heracles vs Nemean Lion
// use your Figher class here

// import { Fighter } from "./src/Fighter";
// const { life } = require("./src/Fighter")
const Fighter = require("./src/Fighter")

const hero1 = new Fighter("👱🏻‍♂️ Heracles", 20, 6);
const hero2 = new Fighter("🦁 Nemean Lion ", 11, 13);

console.log(` ${hero1.name}, has ${hero1.max_Life} lives `)
console.log(` ${hero2.name}, has ${hero2.max_Life} lives `)




hero1.fight(hero2)
hero2.fight(hero1)

// console.log(`${hero1.name} ${hero1.fight(hero2)} ${hero2.name} ${hero2.max_Life}`)