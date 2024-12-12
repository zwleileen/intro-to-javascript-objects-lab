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
const pokemonCopy = pokemon.map((p) => ({ ...p })); //to create a deep copy of pokemon array with all its nested objects, else exercise 7 will change the content of pokemon array
game.party.push(pokemonCopy[0]);
console.log("Exercise 4", game.party);

// Exercise 5
for (let i = 1; i < pokemonCopy.length; i++) {
  if (pokemonCopy[i].type === "grass" && pokemonCopy[i].hp >= 40) {
    if (game.party.length < 4) {
      game.party.push(pokemonCopy[i]);
    } else {
    }
  }
}
console.log("Exercise 5", game.party);

// Exercise 6
let col = game.gyms.length - 1; //returns index of last column of array
for (let i = 0; i < col; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}
console.log("Exercise 6", game.gyms);

// Exercise 7
for (let i = 0; i < game.party.length; i++) {
  if (game.party[i].name === "Bulbasaur") {
    //why does this also change the "Bulbasaur" in pokemon data?
    game.party[i].name = "Ivysaur";
  } else if (game.party[i].name === "Charmander") {
    game.party[i].name = "Charmeleon";
  } else if (game.party[i].name === "Squirtle") {
    game.party[i].name = "Wartortle";
  } else if (game.party[i].name === "Pikachu") {
    game.party[i].name = "Raichu";
  } else {
  }
}
console.log("Exercise 7", game.party);
// console.log(pokemon[0].name);

// Exercise 8
game.party.forEach((item) => console.log("Exercise 8:", item.name));

// Exercise 9 -->trying out filter and foreach together
pokemon
  .filter((p) => p.starter === true) //filter() creates a new array and assigns every p in pokemon that has starter=true
  .forEach((p) => console.log("Exercise 9", p.name));

// Exercise 10
game.catchPokemon = (pokemonObj) => {
  //catchPokemon is a method because it represents an action that game object can perform
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemonCopy[1]);
console.log("Exercise 10", game.party); //returns Ivysaur as the fifth item

// Exercise 11
// console.log(game.items[1].quantity);
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  game.items[1].quantity--; //decrement of 1, opposite of ++
  console.log(game.items[1].quantity);
};
game.catchPokemon(pokemonCopy[1]);
console.log("Exercise 11", game.items);

// Exercise 12
let col2 = game.gyms.length - 1; //returns index of last column of array
for (let i = 0; i < col2; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}
console.log("Exercise 12", game.gyms);

// Exercise 13
