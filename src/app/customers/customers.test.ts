import { expect } from '@open-wc/testing';
import Customers from './customers.js';

describe('Customers', () => {
  it('<app-customers> is an instance of Customers', async () => {
    const element = document.createElement('app-customers');
    expect(element).to.be.instanceOf(Customers);
  });
});
