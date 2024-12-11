// console.log("woohoo");
const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1
// console.dir(pokemon, { maxArrayLength: null });
console.log("Exercise 1", pokemon[58].name);

// Exercise 2
// console.log(game);

// Exercise 3
game.difficulty = "Easy";
// console.log(game);

// Exercise 4
// console.log(Array.isArray(game.party));
game.party.push(pokemon[0].name);
console.log("Exercise 4", game.party);

// Exercise 5
for (let i = 1; i < 50; i++) {
  if (pokemon[i].type === "grass" && pokemon[i].hp >= 40) {
    if (game.party.length < 4) {
      game.party.push(pokemon[i].name);
    } else {
    }
  }
}
console.log("Exercise 5", game.party);

// Exercise 6

// if (pokemon[3].starter === true) {
//   console.log(pokemon[3].name);
// } else {
// }
