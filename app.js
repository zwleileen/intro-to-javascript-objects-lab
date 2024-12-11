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
game.party.push(pokemon[0]);
console.log("Exercise 4", game.party);

// Exercise 5
for (let i = 1; i < 50; i++) {
  if (pokemon[i].type === "grass" && pokemon[i].hp >= 40) {
    if (game.party.length < 4) {
      game.party.push(pokemon[i]);
    } else {
    }
  }
}
console.log("Exercise 5", game.party);

// Exercise 6
let col = game.gyms.length - 1; //returns index of last column of array
for (let g = 0; g < col; g++) {
  if (game.gyms[g].difficulty < 3) {
    game.gyms[g].completed = true;
  }
}
console.log("Exercise 6", game.gyms);

// Exercise 7
for (let e = 0; e < game.party.length; e++) {
  if (game.party[e].name === "Bulbasaur") {
    //why does this also change the "Bulbasaur" in pokemon data?
    game.party[e].name = "Ivysaur";
  } else if (game.party[e].name === "Charmander") {
    game.party[e].name = "Charmeleon";
  } else if (game.party[e].name === "Squirtle") {
    game.party[e].name = "Wartortle";
  } else if (game.party[e].name === "Pikachu") {
    game.party[e].name = "Raichu";
  } else {
  }
}
console.log("Exercise 7", game.party);

// Exercise 8
game.party.forEach((item) => console.log("Exercise 8", item.name));

// Exercise 9
pokemon
  .filter((i) => i.starter === true) //filter() creates a new array and assigns every i in pokemon that has starter=true
  .forEach((i) => console.log("Exercise 9", i.name));

// Exercise 10
