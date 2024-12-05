import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent } from 'igniteui-webcomponents';
import { IgcCategoryChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { eCommerceService } from '../services/ECommerce-service';

defineComponents(IgcComboComponent);

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-sales')
export default class Sales extends LitElement {
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
    .combo {
      width: 240px;
      height: max-content;
      min-width: 240px;
      max-width: 240px;
      flex-shrink: 0;
    }
    .category-chart {
      --brushes: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --outlines: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --marker-brushes: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      --marker-outlines: #FF7453 #AAA6A5 #3CB76E #5B5756 #FFAE53;
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    eCommerceService.getRevenueList().then(data => this.eCommerceRevenue = data);
    eCommerceService.revenue.subscribe(x => { this.revenue = x; this.requestUpdate(); });
  }

  @state()
  private eCommerceRevenue: RevenueType[] = [];
  private revenue: RevenueType[] = [];

  public comboIgcChange(event: any) {
    eCommerceService.revenue.next(event.detail.newValue as RevenueType[]);
  }

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="column-layout group_1">
          <div class="row-layout group_2">
            <h6 class="h6">
              Sales
            </h6>
            <div class="row-layout group_3"></div>
          </div>
          <div class="row-layout group_4">
            <div class="row-layout group_5">
              <igc-combo .data="${this.eCommerceRevenue}" label="Sales" placeholder="Choose a month" display-key="Month" ?outlined="${false}" @igcChange="${this.comboIgcChange}" class="combo"></igc-combo>
            </div>
          </div>
          <div class="row-layout group_6">
            <igc-category-chart computed-plot-area-margin-mode="series" .dataSource="${this.revenue}" class="category-chart"></igc-category-chart>
          </div>
        </div>
      </div>
    `;
  }
}
