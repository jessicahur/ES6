import chai from 'chai';
// import chaiHttp from 'chai-Http';
import fs from 'fs';
const assert = chai.assert;
const expect = chai.expect;

import main from '../src/class';

describe ('CLASS ES6', function() {

  it('should sucessfully import the export default function and give the expected answer', function(){
    let numWeeks = main(150000, 250);
    assert.equal(numWeeks, 9);
  });
})
