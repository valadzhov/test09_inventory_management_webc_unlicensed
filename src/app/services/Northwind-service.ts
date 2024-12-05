import { OrdersType } from '../models/Northwind/orders-type';
import { Northwind } from '../static-data/northwind';

class NorthwindService {
	public getOrders(): OrdersType[] {
		return Northwind['OrdersType'];
	}
}
export const northwindService: NorthwindService = new NorthwindService();
