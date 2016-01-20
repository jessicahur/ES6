'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = main;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseTree = function BaseTree() {
  _classCallCheck(this, BaseTree);

  this.fruit = 0;
};

var Tree = function (_BaseTree) {
  _inherits(Tree, _BaseTree);

  function Tree() {
    _classCallCheck(this, Tree);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this));
  }

  _createClass(Tree, [{
    key: 'makeFruits',
    value: function makeFruits() {
      ++this.fruit;
    }
  }]);

  return Tree;
}(BaseTree);

function main(numPpl, numFruits) {
  var plants = [];
  var week = 1;

  calculate(numPpl, numFruits);
  function calculate(numPpl, numFruits) {
    if (week === 1) {
      for (var ii = 0; ii < numFruits; ii++) {
        plants.push(new Tree());
        // console.log(plants);
      }
      week++;
    } //end of if
    else {
        for (var jj = 0; jj < numFruits; jj++) {
          plants.push(new Tree());
        }
        week++;
      } //end of else

    var totalFruits = 0;
    // console.log('HERE',totalFruits);

    plants.forEach(function (plant) {
      plant.makeFruits();
      totalFruits += plant.fruit;
    });

    // console.log('TOTAL FRUITS', totalFruits);

    if (totalFruits < numPpl) {
      calculate(numPpl, totalFruits);
    }
  } //end of function calculate
  return week;
}

// var a = main(200, 15);
// console.log(a);
// var b = main(15, 1);
// console.log(b);
// var c = main(50000, 1);
// console.log(c);
// var d = main(150000, 250);
// console.log(d);