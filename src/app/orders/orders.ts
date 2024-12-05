import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents-grids/grids/combined.js';
import { OrdersType } from '../models/Northwind/orders-type';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcInputComponent);

@customElement('app-orders')
export default class Orders extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: var(--ig-gray-100);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 24px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: space-between;
      gap: 24px;
      position: relative;
    }
    .group_5 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h6 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .icon {
      color: var(--ig-surface-500);
    }
    .icon_1 {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .input {
      height: max-content;
      min-width: 180px;
      flex-shrink: 0;
    }
    .button_1::part(base) {
      color: var(--ig-surface-500);
    }
    .grid {
      --ig-size: var(--ig-size-medium);
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northwindOrders = northwindService.getOrders();
  }

  @state()
  private northwindOrders: OrdersType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <div class="row-layout group_2">
            <h6 class="h6">
              Orders
            </h6>
            <div class="row-layout group_3">
              <igc-button type="button" class="button button_1">
                <span class="material-icons icon">
                  add
                </span>
                <span>New Order</span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="outlined" type="button" class="button">
                <span class="material-icons">
                  picture_as_pdf
                </span>
                <span>Download PDF</span>
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button variant="outlined" type="button" class="button">
                <span class="material-icons">
                  print
                </span>
                <span>Print</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="row-layout group_4">
            <div class="row-layout group_5">
              <igc-input label="Search orders" ?outlined="${false}" class="input">
                <span slot="prefix">
                  <span class="material-icons icon_1">
                    search
                  </span>
                </span>
              </igc-input>
              <igc-button variant="outlined" type="button" class="button">
                <span class="material-icons">
                  filter_alt
                </span>
                <span>Filter</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="row-layout group_6">
            <igc-grid .data="${this.northwindOrders}" primary-key="employeeID" ?allow-filtering="${true}" filter-mode="excelStyleFilter" class="ig-typography ig-scrollbar grid">
              <igc-column field="orderID" data-type="number" header="orderID" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="customerID" data-type="string" header="customerID" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="employeeID" data-type="number" header="employeeID" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="orderDate" data-type="date" header="orderDate" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="requiredDate" data-type="date" header="requiredDate" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shippedDate" data-type="date" header="shippedDate" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipVia" data-type="number" header="shipVia" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="freight" data-type="number" header="freight" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipName" data-type="string" header="shipName" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipAddress.street" data-type="string" header="street" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipAddress.city" data-type="string" header="city" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipAddress.region" data-type="string" header="region" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipAddress.postalCode" data-type="string" header="postalCode" ?sortable="${true}" selectable="false"></igc-column>
              <igc-column field="shipAddress.country" data-type="string" header="country" ?sortable="${true}" selectable="false"></igc-column>
            </igc-grid>
          </div>
        </div>
      </div>
    `;
  }
}
