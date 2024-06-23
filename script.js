"use strict";

// Object Creation Basics
const superhero = {
  name: "Superman",
  secretIdentity: "Clark Kent",
  powers: ["Super strength", "Flight", "X-ray vision", "Heat vision"],
  weakness: "Kryptonite",
  //   Method for power use
  usePower(powerName) {
    this.powers.includes(powerName)
      ? console.log(`${this.name} uses ${powerName}`)
      : console.log(`${this.name} does not have the power of ${powerName}`);
  },

  //   Method to reveal secret identity
  revealIdentity() {
    console.log(`${this.name}'s secret identity is ${this.secretIdentity}`);
  },
};

console.log(superhero);
superhero.usePower("Flight");
superhero.usePower("Invisibility");
superhero.revealIdentity();

function Superhero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

Superhero.prototype.usePower = function (powerName) {
  this.powers.includes(powerName)
    ? console.log(`${this.name} uses ${powerName}`)
    : console.log(`${this.name} does not have the power of ${powerName}`);
};

Superhero.prototype.revealIdentity = function () {
  console.log(`${this.name}'s secret identity is ${this.secretIdentity}`);
};

// Extending functionalities of superheros
function FlyingSuperhero(name, secretIdentity, powers, weakness, flightSpeed) {
  Superhero.call(this, name, secretIdentity, powers, weakness);
  this.flightSpeed = flightSpeed;
}

FlyingSuperhero.prototype = Object.create(Superhero.prototype);
FlyingSuperhero.prototype.constructor = FlyingSuperhero;

// Adding a method to the FlyingSuperhero prototype
FlyingSuperhero.prototype.fly = function () {
  console.log(`${this.name} is flying at ${this.flightSpeed} mph`);
};

// Creating multiple superhero instances
const superman = new FlyingSuperhero(
  "Superman",
  "Clark Kent",
  ["Super Strength", "Flight", "X-ray vision", "Heat vision"],
  "Kryptonite",
  500
);

const batman = new FlyingSuperhero(
  "Batman",
  "Bruce Wayne",
  ["Marital arts", "stealth", "High intelligence"],
  "none",
  300
);

superman.usePower("Flight");
superman.fly();
batman.usePower("stealth");
batman.fly();

superman.revealIdentity();
batman.revealIdentity();

let characters = [
  {
    name: "Superman",
    type: "superhero",
    powers: ["Super strength", "Flight", "X-ray vision", "Heat vision"],
  },
  {
    name: "Batman",
    type: "superhero",
    powers: ["Martial arts", "Stealth", "High intelligence"],
  },
  {
    name: "Wonder Woman",
    type: "superhero",
    powers: ["Super strength", "Flight", "Lasso of Truth"],
  },
  {
    name: "Joker",
    type: "supervillain",
    powers: ["High intelligence", "Anarchy"],
  },
  {
    name: "Lex Luthor",
    type: "supervillain",
    powers: ["High intelligence", "Wealth"],
  },
  { name: "Flash", type: "superhero", powers: ["Super speed"] },
];

// using forEach
characters.forEach((character) => {
  console.log(`${character.name} is a ${character.type}`);
});

// using map
const charaterNames = characters.map((character) => character.name);
console.log(charaterNames);

// using filter
const superheros = characters.filter(
  (character) => character.type === "superhero"
);
console.log(superheros);
