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
        // console.log(plants);
      }
      week++;
    }//end of if
    else {
      for (var jj = 0; jj < numFruits; jj++){
        plants.push(new Tree());
      }
      week++;
    }//end of else

    var totalFruits = 0;
    // console.log('HERE',totalFruits);

    plants.forEach( plant => {
      plant.makeFruits();
      totalFruits += plant.fruit;
    });

    // console.log('TOTAL FRUITS', totalFruits);

    if (totalFruits < numPpl) {
      calculate(numPpl, totalFruits);
    }

  }//end of function calculate
  console.log(`Number of weeks is: ${week}`);
  return week;
}

// var a = main(200, 15);
// console.log(a);//5
// var b = main(15, 1);
// console.log(b);//5
// var c = main(50000, 1);
// console.log(c);//14
// var d = main(150000, 250);
// console.log(d);//9
module.exports = main;
