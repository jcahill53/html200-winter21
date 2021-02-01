let planets = ['Mercury', 'Venus','Earth', 'Mars', 'Jupiter' ];

console.log(planets);


planets.push('Saturn');
console.log(planets);

planets.splice(2, 1);
console.log(planets);

let str = planets.join(', ');
console.log(str);