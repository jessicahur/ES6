'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function main() {
  var numPpl = arguments.length <= 0 || arguments[0] === undefined ? 15 : arguments[0];
  var numFruits = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  var plants = [];
  var week = 1;

  calculate(numPpl, numFruits);
  function calculate(numPpl, numFruits) {

    for (var ii = 0; ii < numFruits; ii++) {
      plants.push(new Tree());
    }
    week++;

    var totalFruits = 0;

    plants.forEach(function (plant) {
      plant.makeFruits();
      totalFruits += plant.fruit;
    });

    if (totalFruits < numPpl) {
      calculate(numPpl, totalFruits);
    }
  } //end of function calculate

  console.log('For ' + numPpl + ' people and ' + numFruits + ' fruits, the number of weeks is: ' + week);
  return week;
}

module.exports = main;