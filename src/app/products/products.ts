import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcCheckboxComponent, IgcComboComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { ProductsType } from '../models/InventoryApp/products-type';
import { SalesType } from '../models/ECommerce/sales-type';
import { eCommerceService } from '../services/ECommerce-service';
import { inventoryAppService } from '../services/InventoryApp-service';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcSelectComponent, IgcComboComponent, IgcInputComponent, IgcDropdownComponent, IgcCardComponent, IgcIconButtonComponent, IgcDialogComponent, IgcTextareaComponent, IgcCheckboxComponent);

@customElement('app-products')
export default class Products extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
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
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .products {
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
      width: 264px;
      height: max-content;
      min-width: 264px;
      max-width: 264px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      min-width: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .checkbox-group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
    }
    .group_8 {
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
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
    .image {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .icon_2 {
      color: var(--ig-primary-500);
    }
    .image_1 {
      object-fit: cover;
      width: 90px;
      height: 90px;
      min-width: 0;
      min-height: 0;
      max-width: 90px;
      max-height: 90px;
      flex-shrink: 0;
    }
    .media-content {
      height: 250px;
      min-height: 250px;
      max-height: 250px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: var(--ig-primary-500);
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
      flex-shrink: 0;
    }
    .user-input {
      width: 264px;
      height: max-content;
      min-width: 264px;
      max-width: 264px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .button_1 {
      --ig-size: var(--ig-size-medium);
      margin: 0 0 8px 8px;
      height: max-content;
    }
    .user-input_2 {
      height: max-content;
      min-width: min-content;
    }
    .select {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .single-select-combo {
      height: max-content;
      min-width: 120px;
      max-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button_2 {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .input {
      height: max-content;
      min-width: min-content;
      max-width: 120px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .checkbox {
      margin: 0 12px 0 0;
      width: max-content;
      height: max-content;
    }
    .button_3::part(base) {
      color: var(--ig-surface-500);
    }
    .button_4::part(base) {
      color: var(--ig-surface-500);
    }
    .button_5::part(base) {
      color: var(--ig-surface-500);
    }
    .dropdown::part(base) {
      height: max-content;
    }
  `;

  constructor() {
    super();
    inventoryAppService.getProductsList().then(data => this.inventoryAppProducts = data);
    inventoryAppService.products.subscribe(x => { this.products = x; this.requestUpdate(); });
    eCommerceService.getSalesList().then(data => this.eCommerceSales = data);
  }

  @query('#add-new-product')
  private addNewProduct?: IgcDialogComponent;

  @query('#dropdown')
  private dropdown?: IgcDropdownComponent;

  @query('#edit-product-details')
  private editProductDetails?: IgcDialogComponent;

  @state()
  private inventoryAppProducts: ProductsType[] = [];

  @query('#button')
  private button?: IgcButtonComponent;
  private products: ProductsType[] = [];

  @state()
  private eCommerceSales: SalesType[] = [];

  @state()
  private value: string = 'Basic Tee';

  @state()
  private value1: string = '2';

  @state()
  private value2: string = 'Here you can add some description of the product in more details';

  @state()
  private checked: boolean = true;

  @state()
  private value3: number = 15.99;

  @state()
  private value4: number = 99;

  @state()
  private value5: string = 'M050';

  public comboIgcChange(event: any) {
    inventoryAppService.products.next(event.detail.newValue as ProductsType[]);
  }

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h6 class="h6">
            Products
          </h6>
          <div class="row-layout group_2">
            <igc-button type="button" @click="${() => this.addNewProduct?.toggle()}" class="button button_3">
              <span class="material-icons icon">
                add
              </span>
              <span>Add New Product</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="outlined" type="button" class="button">
              <span class="material-icons">
                import_export
              </span>
              <span>Import Product</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div class="row-layout group_1">
          <div class="row-layout group_3">
            <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" class="user-input">
              <igc-select-item value="Option">
                Women
              </igc-select-item>
              <igc-select-item value="Option">
                Men
              </igc-select-item>
              <igc-select-item value="Option">
                Children
              </igc-select-item>
            </igc-select>
            <igc-combo .data="${this.inventoryAppProducts}" label="Category" placeholder="Choose categories" display-key="Product" group-key="Department" ?outlined="${false}" @igcChange="${this.comboIgcChange}" class="user-input"></igc-combo>
            <igc-input label="Search" ?outlined="${false}" class="user-input">
              <span slot="prefix">
                <span class="material-icons icon_1">
                  search
                </span>
              </span>
            </igc-input>
          </div>
          <igc-button variant="flat" type="button" id="button" @click="${() => this.dropdown?.toggle(this.button)}" class="button">
            <span>Sort By</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown" class="dropdown">
            <igc-dropdown-item>
              Alphabetically
            </igc-dropdown-item>
            <igc-dropdown-item>
              Recently Added
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout products">
          ${this.products.map((item) => html`
            <igc-card class="card">
              <igc-card-media class="media-content">
                <img src="${item.ImageURL}" class="image" />
              </igc-card-media>
              <igc-card-header>
                <h3 slot="title">
                  ${item.Product}
                </h3>
                <h5 slot="subtitle">
                  ${item.Department}
                </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <p class="typography__body-2 text">
                  Here you can add some description of the product in more details
                </p>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="outlined" type="button" slot="start" @click="${() => this.editProductDetails?.toggle()}" class="button_1">
                  Edit
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-icon-button slot="end" variant="flat" class="icon-button">
                  <span class="material-icons icon_2">
                    remove_red_eye
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
                <igc-icon-button slot="end" variant="flat" class="icon-button">
                  <span class="material-icons icon_2">
                    delete
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
              </igc-card-actions>
            </igc-card>
          `)}
        </div>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" id="add-new-product">
        <h5 slot="title">
          Add New Product
        </h5>
        <div class="column-layout group_4">
          <div class="column-layout group_5">
            <igc-input label="Product title" placeholder="e.g Blue jeans" ?outlined="${false}" class="user-input_2"></igc-input>
            <div class="row-layout group_5">
              <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" class="select">
                <igc-select-item value="1">
                  Women's Clothing
                </igc-select-item>
                <igc-select-item value="2">
                  Men's Clothing
                </igc-select-item>
                <igc-select-item value="3">
                  Children's Clothing
                </igc-select-item>
              </igc-select>
              <igc-combo .data="${this.eCommerceSales}" label="Category" placeholder="Choose categories" value-key="Item" display-key="Item" ?outlined="${false}" ?single-select="${true}" class="single-select-combo"></igc-combo>
            </div>
            <igc-textarea label="Product description" placeholder="e.g.  Blue jeans, regular fit, 100% cotton" ?outlined="${false}" class="user-input_2"></igc-textarea>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Images
            </p>
            <igc-button variant="outlined" type="button" class="button_2">
              <span class="material-icons">
                photo_camera
              </span>
              <span>Upload pictures</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <div class="row-layout group_7">
            <igc-input type="number" label="Unit price" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="number" label="Units in stock" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="number" label="Product #" ?outlined="${false}" class="input"></igc-input>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Select available sizes:
            </p>
            <div class="row-layout checkbox-group">
              <igc-checkbox labelPosition="after" class="checkbox">
                XS
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                S
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                M
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                L
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XL
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XXL
              </igc-checkbox>
            </div>
          </div>
          <div class="row-layout group_8">
            <igc-button type="button" @click="${() => this.addNewProduct?.toggle()}" class="button button_4">
              ADD PRODUCT
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" type="button" @click="${() => this.addNewProduct?.toggle()}" class="button">
              CANCEL
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div slot="footer"></div>
      </igc-dialog>
      <igc-dialog ?close-on-outside-click="${true}" id="edit-product-details">
        <h5 slot="title">
          Edit Product Details
        </h5>
        <div class="column-layout group_4">
          <div class="column-layout group_5">
            <igc-input label="Product title" placeholder="e.g Blue jeans" ?outlined="${false}" value="${this.value}" @igcChange="${(e: any) => this.value = e.detail}" class="user-input_2"></igc-input>
            <div class="row-layout group_5">
              <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" value="${this.value1}" @igcChange="${(e: any) => this.value1 = e.detail.value}" class="select">
                <igc-select-item value="1">
                  Women's Clothing
                </igc-select-item>
                <igc-select-item value="2">
                  Men's Clothing
                </igc-select-item>
                <igc-select-item value="3">
                  Children's Clothing
                </igc-select-item>
              </igc-select>
              <igc-combo .data="${this.eCommerceSales}" label="Category" placeholder="Choose categories" value-key="Item" display-key="Item" ?outlined="${false}" ?single-select="${true}" class="single-select-combo"></igc-combo>
            </div>
            <igc-textarea label="Product description" placeholder="e.g.  Blue jeans, regular fit, 100% cotton" ?outlined="${false}" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail}" class="user-input_2"></igc-textarea>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Images
            </p>
            <div class="row-layout group_5">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80" class="image_1" />
              <img src="https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" class="image_1" />
              <img src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" class="image_1" />
            </div>
            <igc-button variant="outlined" type="button" class="button_2">
              <span class="material-icons">
                photo_camera
              </span>
              <span>Upload pictures</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Select available sizes:
            </p>
            <div class="row-layout checkbox-group">
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                XS
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                S
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                M
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                L
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="checkbox">
                XL
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XXL
              </igc-checkbox>
            </div>
          </div>
          <div class="row-layout group_7">
            <igc-input type="number" label="Unit price" ?outlined="${false}" value="${this.value3}" @igcChange="${(e: any) => this.value3 = e.detail}" class="input"></igc-input>
            <igc-input type="number" label="Units in stock" ?outlined="${false}" value="${this.value4}" @igcChange="${(e: any) => this.value4 = e.detail}" class="input"></igc-input>
            <igc-input label="Product #" ?outlined="${false}" value="${this.value5}" @igcChange="${(e: any) => this.value5 = e.detail}" class="input"></igc-input>
          </div>
          <div class="row-layout group_8">
            <igc-button type="button" @click="${() => this.editProductDetails?.toggle()}" class="button button_5">
              UPDATE
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" type="button" @click="${() => this.editProductDetails?.toggle()}" class="button">
              CANCEL
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div slot="footer"></div>
      </igc-dialog>
    `;
  }
}
