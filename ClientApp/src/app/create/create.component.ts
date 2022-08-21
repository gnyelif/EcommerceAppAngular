import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderCreateModel} from '../models/orderCreateModel'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
title="Create";
constructor(private orderService:OrderService){}
orderCreateModel:OrderCreateModel= new OrderCreateModel();

  ngOnInit() {

  }

  createOrder(customerorderno : string ,
    address1 : string,address2 : string,
    quantity : string,quantityunit : string,
    weight:string,weightunit:string,
    materialname : string, materialcode : string,
    not : string
    )
  {
    this.orderCreateModel.CustomerOrderId=customerorderno
    this.orderCreateModel.SenderAddress=address1
    this.orderCreateModel.DestinationAddress=address2
    this.orderCreateModel.Quantity= parseFloat(quantity)
    this.orderCreateModel.QuantityUnit = quantityunit
    this.orderCreateModel.Weight=parseFloat(weight)
    this.orderCreateModel.WeightUnit=weightunit
    this.orderCreateModel.MaterialName=materialname
    this.orderCreateModel.MaterialCode=materialcode
    this.orderCreateModel.Not=not
    // console.log(customerorderno);
    console.log(this.orderCreateModel);
    var orderListPostModel:OrderCreateModel[] =  [];
    orderListPostModel.push(this.orderCreateModel);
    this.orderService.addOrder(orderListPostModel).subscribe(y=>{
      alert(y[0].statusMessage);
        if(y[0].status==0)
        {//başarılı ise sayfa yeniden yüklenir.
          window.location.reload();
        }
        
    });
  }

}
