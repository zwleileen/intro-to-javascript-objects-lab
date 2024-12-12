// console.log("woohoo");
const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    //notes: remember that this game.gyms is not a multidimensional array, it is a single array made up of objects
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

// Exercise 4
const pokemonCopy = pokemon.map((p) => ({ ...p })); //notes: to create a deep copy of pokemon array with all its nested objects, else exercise 7 will change the content of pokemon array
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
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}
console.log("Exercise 6", game.gyms);

// Exercise 7 --> trying switch
for (let i = 0; i < game.party.length; i++) {
  switch (game.party[i].name) {
    case "Bulbasaur":
      //question: why does this also change the "Bulbasaur" in pokemon data?
      game.party[i].name = "Ivysaur";
      break;
    case "Charmander":
      game.party[i].name = "Charmeleon";
      break;
    case "Squirtle":
      game.party[i].name = "Wartortle";
      break;
    case "Pikachu":
      game.party[i].name = "Raichu";
      break;
    default:
      break;
  }
}
console.log("Exercise 7", game.party);

// Exercise 8
game.party.forEach((item) => console.log("Exercise 8:", item.name));

// Exercise 9 -->trying out filter and foreach together
pokemon
  .filter((p) => p.starter === true) //notes: filter() creates a new array and assigns every p in pokemon that has starter=true
  .forEach((p) => console.log("Exercise 9", p.name));

// Exercise 10
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemonCopy[10]);
console.log("Exercise 10", game.party); //notes: returns Metapod as the fifth item

// Exercise 11
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  game.items[1].quantity--; //notes: decrement of 1, opposite of ++
};
game.catchPokemon(pokemonCopy[20]);
// game.catchPokemon(pokemonCopy[30]);
console.log("Exercise 11", game.items);

// Exercise 12
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}
console.log("Exercise 12", game.gyms);

// Exercise 13
let gymTally = {
  completed: 0,
  incomplete: 0,
};
game.gymStatus = () => {
  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  }
};
game.gymStatus();
console.log("Exercise 13", gymTally);

// Exercise 14
game.partyCount = () => {
  return game.party.length;
};
console.log("Exercise 14", game.partyCount());

// Exercise 15
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}
console.log("Exercise 15", game.gyms);

// Exercise 16
console.log("------------------");
console.log("Exercise 16", game);
