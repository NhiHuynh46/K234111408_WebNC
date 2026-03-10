import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listcustomer2',
  standalone: false,
  templateUrl: './listcustomer2.component.html',
  styleUrl: './listcustomer2.component.css'
})
export class Listcustomer2Component {
  customers:any
  constructor(private cs:CustomerService)
  {
    this.customers=cs.get_all_customers()
  }

}
