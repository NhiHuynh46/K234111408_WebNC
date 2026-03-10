import { Component } from '@angular/core';
import { FakeProductService } from '../myservices/fake-product.service';

@Component({
  selector: 'app-fakeproduct',
  standalone: false,
  templateUrl: './fakeproduct.component.html',
  styleUrl: './fakeproduct.component.css'
})
export class FakeproductComponent {
    data:any
errMessage:string=''
constructor(_service:FakeProductService){
_service.getFakeProductData().subscribe({
next:(data)=>{ this.data=data},
error:(err)=>{
this.errMessage=err
}
})
}
}
