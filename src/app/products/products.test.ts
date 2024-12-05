import { expect } from '@open-wc/testing';
import Products from './products.js';

describe('Products', () => {
  it('<app-products> is an instance of Products', async () => {
    const element = document.createElement('app-products');
    expect(element).to.be.instanceOf(Products);
  });
});
