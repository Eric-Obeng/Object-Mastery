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
