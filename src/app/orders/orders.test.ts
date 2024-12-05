import { expect } from '@open-wc/testing';
import Orders from './orders.js';

describe('Orders', () => {
  it('<app-orders> is an instance of Orders', async () => {
    const element = document.createElement('app-orders');
    expect(element).to.be.instanceOf(Orders);
  });
});
