import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers=[
    {"id":"c1","name":"Putin","age":72,"picture":"putin.png"},
    {"id":"c2","name":"Trump","age":78,"picture":"trump.png"},
    {"id":"c3","name":"Kim","age":71,"picture":"kim.png"},
    {"id":"c4","name":"Tap","age":79,"picture":"tap.png"},
  ]

  constructor() { }
  get_all_customers()
  {
    return this.customers
  }
  get_customer_detail(id:string)
  {
    let c=this.customers.find(x=>x.id==id)
    return c
  }
  filter_customer_by_age(a:number,b:number)
  {
    return this.customers.filter(c=>c.age>=a && c.age<=b)
  }
}
