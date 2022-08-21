export interface Order {
  orderId:string;
  customerOrderId:string;
  senderAddress:string;
  destinationAddress:string;
  statusId:string;
  quantity:number;
  quantityUnit:string;
  weight:number;
  weightUnit:string;
  materialCode:string;
  not:string;
}
