console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  #coins: number = 0;

  createRandomBoolean() {
    return Math.random() > 0.5
  }

  userWon() {
    console.log(`Congratulations!!!. You won ${this.#coins} coins!!!`);
    this.#coins = 0;
  }

  userLoose() {
    console.log("Good luck next time!!");
  }

  play() {
    this.#coins++;
    const slots = [
      this.createRandomBoolean(),
      this.createRandomBoolean(),
      this.createRandomBoolean(),
    ];

    slots.every((e: boolean) => e) ? this.userWon() : this.userLoose();
  }
}

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
