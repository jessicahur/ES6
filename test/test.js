import chai from 'chai';
import fs from 'fs';
const assert = chai.assert;
const expect = chai.expect;

import main from '../src/class';

describe ('CLASS ES6', () => {

  it('should sucessfully import the export default function and give the expected answer', () => {
    let array = [[], [200,15], [50000,1], [150000, 250]];
    let results = [5, 5, 14, 9];
    let calculated = array.map((elemArray) => main(elemArray[0], elemArray[1]));
    console.log(calculated);
    assert.deepEqual(calculated, results);
  });
})
