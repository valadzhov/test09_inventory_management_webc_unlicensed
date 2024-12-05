import { expect } from '@open-wc/testing';
import Sales from './sales.js';

describe('Sales', () => {
  it('<app-sales> is an instance of Sales', async () => {
    const element = document.createElement('app-sales');
    expect(element).to.be.instanceOf(Sales);
  });
});
