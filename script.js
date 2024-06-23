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

// Creating multiple superhero instances
const superman = new Superhero(
  "Superman",
  "Clark Kent",
  ["Super Strength", "Flight", "X-ray vision", "Heat vision"],
  "Kryptonite"
);

const batman = new Superhero(
  "Batman",
  "Bruce Wayne",
  ["Marital arts", "stealth", "High intelligence"],
  "none"
);

superman.usePower("Flight");
batman.usePower("stealth");

superman.revealIdentity();
batman.revealIdentity();
