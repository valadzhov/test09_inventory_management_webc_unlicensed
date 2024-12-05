import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './products/products';
import './orders/orders';
import './sales/sales';
import './customers/customers';
import './reports/reports';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'products', component: 'app-products', name: 'Products' },
  { path: 'orders', component: 'app-orders', name: 'Orders' },
  { path: 'sales', component: 'app-sales', name: 'Sales' },
  { path: 'customers', component: 'app-customers', name: 'Customers' },
  { path: 'reports', component: 'app-reports', name: 'Reports' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
