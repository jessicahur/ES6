'use strict';
class BaseTree {
  constructor() {
    this.fruit = 0;
  }
}

class Tree extends BaseTree {
  constructor() {
    super();
  }
  makeFruits(){
    ++this.fruit;
  }
}

function main(numPpl=15, numFruits=1) {
  var plants = [];
  var week = 1;

  calculate(numPpl, numFruits);
  function calculate(numPpl, numFruits){
    if (week ===1) {
      for (var ii = 0; ii < numFruits; ii++) {
        plants.push(new Tree);
      }
      week++;
    }
    else {
      for (var jj = 0; jj < numFruits; jj++){
        plants.push(new Tree());
      }
      week++;
    }

    var totalFruits = 0;

    plants.forEach( plant => {
      plant.makeFruits();
      totalFruits += plant.fruit;
    });

    if (totalFruits < numPpl) {
      calculate(numPpl, totalFruits);
    }

  }//end of function calculate

  console.log(`For ${numPpl} people and ${numFruits} fruits, the number of weeks is: ${week}`);
  return week;
}

module.exports = main;
