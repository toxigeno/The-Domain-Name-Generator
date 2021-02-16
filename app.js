let pronoun = ['the','our'];
let adj = ['great','big' ];
let noun = ['jogger','racoon'];
let end = ['.us', '.com', '.net', '.io']


let random = Math.floor(Math.random()*pronoun.length);
let random1 = Math.floor(Math.random()*adj.length);
let random2 = Math.floor(Math.random()*noun.length);
let random3 = Math.floor(Math.random()*end.length);

generator = pronoun[random]+adj[random1]+noun[random2]+end[random3];

console.log(generator);

// cambios