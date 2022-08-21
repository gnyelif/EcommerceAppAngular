import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
