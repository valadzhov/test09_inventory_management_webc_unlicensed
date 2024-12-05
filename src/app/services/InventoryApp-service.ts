import { FetchApi } from './FetchApi-service';
import { NewProductsType } from '../models/InventoryApp/new-products-type';
import { ProductsType } from '../models/InventoryApp/products-type';
import { BehaviorSubject } from 'rxjs';

class InventoryAppService {
	private _products$!: BehaviorSubject<ProductsType[]>;

	public get products(): BehaviorSubject<ProductsType[]> {
		if (!this._products$) {
			this._products$ = new BehaviorSubject<ProductsType[]>([]);
			this.getProductsList().then(v => this._products$.next(v));
		}
		return this._products$;
	}

	public getNewProductsList = async (): Promise<NewProductsType[]> => {
		return await FetchApi.fetchApiResponse<NewProductsType[]>('https://excel2json.io/api/share/4b54e7f8-927a-4a38-e690-08dab79fa5b4', []);
	}

	public getProductsList = async (): Promise<ProductsType[]> => {
		return await FetchApi.fetchApiResponse<ProductsType[]>('https://excel2json.io/api/share/22b3aaa8-bba3-43cb-e68f-08dab79fa5b4', []);
	}
}
export const inventoryAppService: InventoryAppService = new InventoryAppService();
