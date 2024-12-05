import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { IgcCategoryChartModule, IgcPieChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { NewProductsType } from '../models/InventoryApp/new-products-type';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { SalesType } from '../models/ECommerce/sales-type';
import { eCommerceService } from '../services/ECommerce-service';
import { inventoryAppService } from '../services/InventoryApp-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent);

ModuleManager.register(IgcPieChartModule, IgcCategoryChartModule);

@customElement('app-home')
export default class Home extends LitElement {
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
      overflow: auto;
      position: relative;
      padding: 16px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .metrics {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card {
      height: max-content;
      min-width: 236px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: stretch;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .new-products {
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-300);
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      min-width: 236px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: auto;
      position: relative;
      min-width: 50px;
      min-height: 260px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      flex-shrink: 0;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .image {
      object-fit: contain;
      margin: 0 0 24px;
      width: 100px;
      height: 100px;
      min-width: 0;
      min-height: 0;
      max-width: 100px;
      max-height: 100px;
      flex-shrink: 0;
    }
    .text {
      text-align: center;
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .h4 {
      text-align: center;
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      text-align: center;
      color: var(--ig-success-500);
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      text-align: center;
      color: var(--ig-primary-500);
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: var(--ig-gray-800);
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --ig-size: var(--ig-size-medium);
    }
    .text_4 {
      height: max-content;
      min-width: min-content;
    }
    .avatar::part(base) {
      background-color: var(--ig-surface-500);
    }
    .button {
      --ig-size: var(--ig-size-medium);
      margin: 0 8px 8px 0;
      height: max-content;
    }
    .list {
      height: max-content;
    }
    .pie-chart {
      --brushes: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --outlines: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      min-width: 100px;
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .category-chart {
      --brushes: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --outlines: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --marker-brushes: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --marker-outlines: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      min-width: 100px;
      min-height: 200px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    inventoryAppService.getNewProductsList().then(data => this.inventoryAppNewProducts = data);
    eCommerceService.getSalesList().then(data => this.eCommerceSales = data);
    eCommerceService.getRevenueList().then(data => this.eCommerceRevenue = data);
  }

  @state()
  private inventoryAppNewProducts: NewProductsType[] = [];

  @state()
  private eCommerceSales: SalesType[] = [];

  @state()
  private eCommerceRevenue: RevenueType[] = [];

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout metrics">
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
            </h3>
              <h5 slot="subtitle">
            </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_1">
                <img src="/src/assets/Products.svg" class="image" />
                <p class="typography__subtitle-1 text">
                  Products
                </p>
                <h4 class="h4">
                  1,236
                </h4>
                <p class="typography__subtitle-2 text_1">
                  Increased 75%
                </p>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="outlined" type="button" slot="end" class="button">
                View report
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
            </h3>
              <h5 slot="subtitle">
            </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_1">
                <img src="/src/assets/Orders.svg" class="image" />
                <p class="typography__subtitle-1 text">
                  Orders
                </p>
                <h4 class="h4">
                  3,612
                </h4>
                <p class="typography__subtitle-2 text_1">
                  Increased 75%
                </p>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="outlined" type="button" slot="end" class="button">
                View report
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
            </h3>
              <h5 slot="subtitle">
            </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_1">
                <img src="/src/assets/Sales.svg" class="image" />
                <p class="typography__subtitle-1 text">
                  Sales
                </p>
                <h4 class="h4">
                  $35,000
                </h4>
                <p class="typography__subtitle-2 text_2">
                  Decreased 15%
                </p>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="outlined" type="button" slot="end" class="button">
                View report
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
            </h3>
              <h5 slot="subtitle">
            </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_1">
                <img src="/src/assets/Customers.svg" class="image" />
                <p class="typography__subtitle-1 text">
                  Customers
                </p>
                <h4 class="h4">
                  +10
                </h4>
                <p class="typography__subtitle-2 text_1">
                  Increased 75%
                </p>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="outlined" type="button" slot="end" class="button">
                View report
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
        </div>
        <div class="row-layout group_2">
          <div class="column-layout new-products">
            <div class="row-layout group_3">
              <p class="typography__subtitle-2 text_3">
                New Products
              </p>
            </div>
            <div class="column-layout group_4">
              <igc-list class="list">
                ${this.inventoryAppNewProducts?.map((item) => html`
                  <igc-list-item>
                    <igc-avatar src="${item.ImageURL}" slot="start" class="avatar"></igc-avatar>
                    <div>
                      <div class="column-layout group_5">
                        <p class="typography__subtitle-2 text_4">
                          ${item.Product}
                        </p>
                        <div class="row-layout group_6">
                          <p class="typography__caption text_4">
                            ${item.Category}
                          </p>
                          <p class="typography__caption text_4">
                            |
                          </p>
                          <p class="typography__caption text_4">
                            ${item.Code}
                          </p>
                        </div>
                      </div>
                    </div>
                  </igc-list-item>
                `)}
              </igc-list>
            </div>
          </div>
          <div class="column-layout new-products">
            <div class="row-layout group_3">
              <p class="typography__subtitle-2 text_3">
                Sales By Category
              </p>
            </div>
            <div class="row-layout group_7">
              <igc-pie-chart .dataSource="${this.eCommerceSales}" label-member-path="Item" value-member-path="Sales" class="pie-chart"></igc-pie-chart>
            </div>
          </div>
          <div class="column-layout new-products">
            <div class="row-layout group_3">
              <p class="typography__subtitle-2 text_3">
                Total Sales
              </p>
            </div>
            <div class="row-layout group_7">
              <igc-category-chart .dataSource="${this.eCommerceRevenue}" chart-type="column" computed-plot-area-margin-mode="series" @click="${() => Router.go(`/sales`)}" class="category-chart"></igc-category-chart>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
