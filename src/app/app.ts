import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent);

@customElement('app-root')
export default class App extends LitElement {
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
      background-color: var(--ig-surface-500);
      border-color: var(--ig-gray-300);
      border-width: 0px 1px 0px 0px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
      width: 260px;
      min-width: 260px;
      max-width: 260px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 48px;
      width: 240px;
      min-width: 50px;
      min-height: 50px;
      max-width: 240px;
    }
    .list {
      width: 240px;
      height: max-content;
      min-width: 240px;
      max-width: 240px;
    }
    .avatar {
      --ig-size: var(--ig-size-medium);
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar_1 {
      --ig-size: var(--ig-size-small);
    }
    .image {
      object-fit: cover;
      min-width: 0;
      min-height: 0;
      max-width: 140px;
      flex-shrink: 0;
    }
    .avatar::part(base) {
      color: var(--ig-surface-500);
      background-color: transparent;
    }
    .avatar_1::part(base) {
      color: var(--ig-surface-500);
      background-color: transparent;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-list class="list">
          <igc-list-item @click="${() => Router.go(`/home`)}">
            <igc-avatar src="/src/assets/Avatar13.png" slot="start" shape="circle" class="avatar"></igc-avatar>
            <div slot="title">Jane Doe</div>
            <div slot="subtitle">Sales Manager</div>
            <span slot="end" class="material-icons icon">
              keyboard_arrow_down
            </span>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/home`)}">
            <igc-avatar src="/src/assets/Store_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Dashboard</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/products`)}">
            <igc-avatar src="/src/assets/Inventory_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Products</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/orders`)}">
            <igc-avatar src="/src/assets/Orders_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Orders</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/customers`)}">
            <igc-avatar src="/src/assets/Customers_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Customers</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/sales`)}">
            <igc-avatar src="/src/assets/Sales_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Sales</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go(`/reports`)}">
            <igc-avatar src="/src/assets/Reports_Icon_Small.svg" slot="start" class="avatar_1"></igc-avatar>
            <div slot="title">Reports</div>
          </igc-list-item>
        </igc-list>
        <div class="column-layout group_1">
          <img src="/src/assets/InventoryMgmt_Logo.svg" class="image" />
        </div>
      </div>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
