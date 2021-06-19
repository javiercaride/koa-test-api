import { Calculator } from '../../src/logic/calculator';
import { expect } from 'chai';
import 'mocha';

describe('First test', () => {
  it('should return right sum', () => {
    const calculator = new Calculator();
    const sum = calculator.add(2, 2);
    expect(sum).to.equal(4);
  });
});
