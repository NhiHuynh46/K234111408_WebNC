import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { FormsModule } from '@angular/forms';
import { Ptb2Component } from './ptb2/ptb2.component';
import { LearndirectiveComponent } from './learndirective/learndirective.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { Listcustomer2Component } from './listcustomer2/listcustomer2.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { Listcustomer3Component } from './listcustomer3/listcustomer3.component';
import {HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductserviceComponent } from './productservice/productservice.component';
import { FakeproductComponent } from './fakeproduct/fakeproduct.component';
import { BooksComponent } from './books/books.component';
@NgModule({
  declarations: [
    AppComponent,
    Ptb1Component,
    Ptb2Component,
    LearndirectiveComponent,
    ListcustomerComponent,
    Listcustomer2Component,
    CustomerdetailComponent,
    Listcustomer3Component,
    NotfoundComponent,
    ListproductComponent,
    ProductdetailComponent,
    ProductserviceComponent,
    FakeproductComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
