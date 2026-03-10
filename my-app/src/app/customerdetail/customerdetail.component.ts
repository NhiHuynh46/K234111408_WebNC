import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.component.html',
  styleUrl: './customerdetail.component.css'
})
export class CustomerdetailComponent {
  constructor(private cs:CustomerService)
  {


  }
  search_customer_by_id(id:string,
    tdid:HTMLElement,
    tdname:HTMLElement,
    tdage:HTMLElement)
    {
      let c=this.cs.get_customer_detail(id)
      if(c!=null)
      {
        tdid.innerHTML=c.id
        tdname.innerHTML=c.name
        tdage.innerHTML="<font color='red'>"+c.age+"</font>"
      }
      else
      {
        tdid.innerHTML=""
        tdname.innerHTML=""
        tdage.innerHTML=""
        alert("Khong tim thay customer Id="+id)
      }
    }
}
