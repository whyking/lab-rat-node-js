/* eslint-env mocha */

import * as chai from 'chai';
import { expect } from 'chai';
import { message } from '../src/message';

chai.should();
chai.use(require('chai-as-promised'));

describe('Test the "Hello Lab Rat!" message.', () => {
  it('The message should be "Hello Lab Rat!".', () => {
    expect(message).to.equal('Hello Lab Rat!');
  });
});
