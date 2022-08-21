import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Order } from '../list/order';
import { Observable } from 'rxjs';
import { OrderCreateModel } from "../models/orderCreateModel";
import { OrderUpdateModel } from "../models/orderUpdateModel";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {

  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(
      "https://localhost:44350/api/order"
    );
  }

  addOrder(postModel: OrderCreateModel[]): Observable<any> {
    return this.http.post<Order[]>(
      "https://localhost:44350/api/order/create",
      postModel
    );
  }

  updateOrder(postModel: OrderUpdateModel): Observable<any> {
    return this.http.post<Order>(
      "https://localhost:44350/api/order/update",
      postModel
    );
  }
}


