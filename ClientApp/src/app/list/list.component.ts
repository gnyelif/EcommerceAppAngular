import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from '../services/order.service';
import { OrderUpdateModel} from '../models/orderUpdateModel'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[OrderService,DatePipe]
})
export class ListComponent implements OnInit {
  title = "Sipariş Listesi";
    orderStatus = [
    {id:1,name:"Sipariş Alındı"},
    {id:2,name:"Yola Çıktı"},
    {id:3,name:"Dağıtım Merkezinde"},
    {id:4,name:"Dağıtıma Çıktı"},
    {id:5,name:"Teslim Edildi"},
    {id:6,name:"Teslim Edilemedi"}
   ];
  orders!: Order[];
  myDate = new Date();

  constructor(private orderService:OrderService,private datePipe: DatePipe)
  {

  }
  orderUpdateModel:OrderUpdateModel= new OrderUpdateModel();

   ngOnInit() {
    this.getOrders();
  }

  changeStatus(orderId : string , status:string)
  {
    this.orderUpdateModel.OrderId=orderId
    this.orderUpdateModel.StatusId=parseFloat(status)
    this.orderUpdateModel.ChangeDate=new Date();


    var orderUpdatePostModel:OrderUpdateModel;

    orderUpdatePostModel = {
      OrderId  : this.orderUpdateModel.OrderId,
      StatusId : this.orderUpdateModel.StatusId,
      ChangeDate : this.orderUpdateModel.ChangeDate,
    }

    this.orderService.updateOrder(orderUpdatePostModel).subscribe(y=>{
      alert(y.statusMessage);
      window.location.reload();
    });
  }

  getOrders(){
     this.orderService.getOrders().subscribe(res => {
     this.orders = res;
   });

  }
}
