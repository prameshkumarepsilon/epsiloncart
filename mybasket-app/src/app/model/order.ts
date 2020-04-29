import { LineItem } from "./line-item";
import { Customer } from "./customer";
export class Order {
  id: number;
  lineItem: Array<LineItem>;
  orderDate: string = new Date().toISOString();
  customerId: number;
  status: string = "PENDING";
}
