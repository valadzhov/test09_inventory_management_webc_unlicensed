import { FetchApi } from './FetchApi-service';
import { SalesType } from '../models/ECommerce/sales-type';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { BehaviorSubject } from 'rxjs';

class ECommerceService {
	private _revenue$!: BehaviorSubject<RevenueType[]>;

	public get revenue(): BehaviorSubject<RevenueType[]> {
		if (!this._revenue$) {
			this._revenue$ = new BehaviorSubject<RevenueType[]>([]);
			this.getRevenueList().then(v => this._revenue$.next(v));
		}
		return this._revenue$;
	}

	public getSalesList = async (): Promise<SalesType[]> => {
		return await FetchApi.fetchApiResponse<SalesType[]>('https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2', []);
	}

	public getRevenueList = async (): Promise<RevenueType[]> => {
		return await FetchApi.fetchApiResponse<RevenueType[]>('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2', []);
	}
}
export const eCommerceService: ECommerceService = new ECommerceService();
